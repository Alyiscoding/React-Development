import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskAssignTo, setTaskAssignTo] = useState("");
    const [taskCategory, setTaskCategory] = useState("");

    // Get updateEmployees from context
    const { employees, updateEmployees } = useContext(AuthContext);

    const submitForm = (e) => {
        e.preventDefault();

        const newTask = {
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category: taskCategory,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        };

        // Clone employees array to avoid direct mutation
        const data = employees ? [...employees] : [];
        let found = false;

        data.forEach(function (elem) {
            if (taskAssignTo.trim().toLowerCase() === elem.name.trim().toLowerCase()) {
                if (!Array.isArray(elem.tasks)) elem.tasks = [];
                elem.tasks.push(newTask);
                found = true;
            }
        });

        if (found) {
            updateEmployees(data); // This will update both localStorage and context
            toast.success("Task Added Successfully");
        } else {
            toast.warning("Employee Not exists");
        }

        // Reset form fields
        setTaskTitle("");
        setTaskDescription("");
        setTaskDate("");
        setTaskAssignTo("");
        setTaskCategory("");
    };


    return (
        <div className="bg-white border border-blue-200 rounded-2xl shadow-xl p-6 sm:p-8 w-full">
            <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">Create New Task</h2>
            <form className="space-y-5" onSubmit={(e) => submitForm(e)}>
                <div>
                    <label htmlFor="title" className="block mb-1 text-sm font-semibold text-gray-700">Task Title</label>
                    <input type="text" id="title" className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Make ABC Component" required
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-semibold text-gray-700">Description</label>
                    <textarea id="message" rows="4" className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Task Description..."
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="date" className="block mb-1 text-sm font-semibold text-gray-700">Assign Date</label>
                    <input type="date" id="date" className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500" required
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="assignTo" className="block mb-1 text-sm font-semibold text-gray-700">Assign To</label>
                    <input type="text" id="assignTo" className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Employee Name" required
                        value={taskAssignTo}
                        onChange={(e) => setTaskAssignTo(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block mb-1 text-sm font-semibold text-gray-700">Category</label>
                    <input type="text" id="category" className="w-full border rounded-md p-2 border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Task Category" required
                        value={taskCategory}
                        onChange={(e) => setTaskCategory(e.target.value)}
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