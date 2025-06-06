import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const NewTask = ({ data }) => {
    const { updateTask = () => Promise.resolve({ success: false }), currentUser = null } = useContext(AuthContext);

    const handleAccept = async () => {
        const updates = {
            newTask: false,
            active: true
        };

        const result = await updateTask(data._id, updates);
        if (result.success) {
            toast.success("Task accepted!");
        } else {
            toast.error("Failed to accept task");
        }
    };

    return (



        <div className="w-72 min-w-[260px] bg-gradient-to-br from-purple-400 to-purple-700 p-5 rounded-xl flex-shrink-0 shadow-lg transition-transform hover:scale-105">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold bg-purple-200 text-purple-900 px-3 py-1 rounded text-sm">{data.category || "No Category"}</h3>
                <h4 className="font-semibold text-white">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-white">{data.title}</h2>
            <p className="text-sm text-purple-100">
                {data.description || "No description provided."}
            </p>
            <div className='flex justify-center mt-4'>
                <button
                    onClick={handleAccept}
                    className='bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-4 rounded shadow transition-colors text-sm'
                >
                    Accept Task
                </button>
            </div>
        </div>
    );
};

export default NewTask;