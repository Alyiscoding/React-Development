


import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskAssignTo, setTaskAssignTo] = useState("");
    const [taskCategory, setTaskCategory] = useState("");
    const { employees = [], addTask } = useContext(AuthContext);

    const submitForm = async (e) => {
        e.preventDefault();

        // Find the employee to assign to
        const employee = employees.find(e => 
            e.name.trim().toLowerCase() === taskAssignTo.trim().toLowerCase()
        );

        if (!employee) {
            toast.warning("Employee not found");
            return;
        }

        const newTask = {
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category: taskCategory,
            assignedTo: employee._id,
            newTask: true
        };

        const result = await addTask(newTask);
        if (result.success) {
            toast.success("Task Added Successfully");
            // Reset form
            setTaskTitle("");
            setTaskDescription("");
            setTaskDate("");
            setTaskAssignTo("");
            setTaskCategory("");
        } else {
            toast.error(result.message || "Failed to add task");
        }
    };

    return (
        // ... (keep the same JSX structure)
        <div className="bg-white border border-blue-200 rounded-2xl shadow-xl p-6 sm:p-8 w-full">
      <div className="flex items-center gap-3 mb-8">
        <span className="inline-block w-2 h-8 bg-blue-600 rounded-full"></span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-700 tracking-wide">Create New Task</h2>
      </div>
      <form className="space-y-5" onSubmit={submitForm}>
        <div>
          <label htmlFor="title" className="block mb-1 text-sm font-semibold text-gray-700">Task Title</label>
          <input
            type="text"
            id="title"
            className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Make ABC Component"
            required
            value={taskTitle}
            onChange={e => setTaskTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-semibold text-gray-700">Description</label>
          <textarea
            id="message"
            rows="4"
            className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Task Description..."
            value={taskDescription}
            onChange={e => setTaskDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date" className="block mb-1 text-sm font-semibold text-gray-700">Assign Date</label>
          <input
            type="date"
            id="date"
            className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
            value={taskDate}
            onChange={e => setTaskDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="assignTo" className="block mb-1 text-sm font-semibold text-gray-700">Assign To</label>
          <input
            type="text"
            id="assignTo"
            className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Employee Name"
            required
            value={taskAssignTo}
            onChange={e => setTaskAssignTo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category" className="block mb-1 text-sm font-semibold text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Task Category"
            required
            value={taskCategory}
            onChange={e => setTaskCategory(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 rounded-md font-semibold hover:opacity-90 transition duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
    );
};

export default CreateTask;
