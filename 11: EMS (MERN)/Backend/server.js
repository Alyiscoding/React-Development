import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import "dotenv/config";

// ------------------
// MongoDB Connection
// ------------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// ------------------
// Models
// ------------------

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'employee' }, // 'admin' or 'employee'
  taskCounts: {
    active: { type: Number, default: 0 },
    completed: { type: Number, default: 0 },
    failed: { type: Number, default: 0 },
    new: { type: Number, default: 0 },
  },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

// Task Schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  category: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  active: { type: Boolean, default: false },
  newTask: { type: Boolean, default: false },
  completed: { type: Boolean, default: false },
  failed: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

// ------------------
// App Setup
// ------------------
const app = express();
const port = process.env.PORT || 4000;

connectDB();
app.use(express.json());
// WARNING: In production, restrict CORS origin
app.use(cors());

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ------------------
// API Routes
// ------------------

// Register new user
app.post('/add-user', async (req, res) => {
  try {
    const existing = await User.findOne({ email: req.body.email });
    if (existing) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }
    const user = await User.create(req.body);
    res.status(201).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Login user
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ success: false, message: "Invalid credentials" });

    // TODO: Issue JWT token here for authentication
    res.json({ success: true, message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update user (hash password if changed)
app.put('/update-user/:id', async (req, res) => {
  try {
    let updateData = { ...req.body };
    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(updateData.password, salt);
    }
    const updated = await User.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json({ success: true, user: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Add new task and update user taskCounts
app.post('/add-task', async (req, res) => {
  try {
    const task = await Task.create(req.body);

    // Update user's taskCounts
    const user = await User.findById(req.body.assignedTo);
    if (!user) {
      return res.status(404).json({ success: false, message: "Assigned user not found" });
    }

    const updates = { ...user.taskCounts };
    if (task.active) updates.active++;
    if (task.completed) updates.completed++;
    if (task.failed) updates.failed++;
    if (task.newTask) updates.new++;

    await User.findByIdAndUpdate(req.body.assignedTo, { taskCounts: updates });

    res.status(201).json({ success: true, task });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update task and update user taskCounts
app.put('/update-task/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Recalculate taskCounts for the assigned user
    if (updatedTask && updatedTask.assignedTo) {
      const userId = updatedTask.assignedTo;
      const allTasks = await Task.find({ assignedTo: userId });

      const taskCounts = {
        active: allTasks.filter(t => t.active).length,
        completed: allTasks.filter(t => t.completed).length,
        failed: allTasks.filter(t => t.failed).length,
        new: allTasks.filter(t => t.newTask).length,
      };

      await User.findByIdAndUpdate(userId, { taskCounts });
    }

    res.json({ success: true, task: updatedTask });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete task and update user taskCounts
app.delete('/delete-task/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }
    // Update user's taskCounts
    if (task.assignedTo) {
      const user = await User.findById(task.assignedTo);
      if (user) {
        const updates = { ...user.taskCounts };
        if (task.active) updates.active = Math.max(0, updates.active - 1);
        if (task.completed) updates.completed = Math.max(0, updates.completed - 1);
        if (task.failed) updates.failed = Math.max(0, updates.failed - 1);
        if (task.newTask) updates.new = Math.max(0, updates.new - 1);
        await User.findByIdAndUpdate(task.assignedTo, { taskCounts: updates });
      }
    }
    res.json({ success: true, message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete user (employee)
app.delete('/delete-user/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    // Optionally, delete all tasks assigned to this user
    await Task.deleteMany({ assignedTo: req.params.id });
    res.json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// List all users with their tasks
app.get('/users-tasks', async (req, res) => {
  try {
    const users = await User.find();
    const results = [];

    for (let user of users) {
      const tasks = await Task.find({ assignedTo: user._id });
      results.push({ user, tasks });
    }

    res.json({ success: true, data: results });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ------------------
// Start Server
// ------------------
app.listen(port, () => {
  console.log("Server Started at port: " + port);
});
