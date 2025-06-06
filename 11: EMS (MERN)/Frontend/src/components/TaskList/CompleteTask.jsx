import React from 'react';

export const CompleteTask = ({ data, employeeName, onStatusChange }) => {
    return (
        <div className="w-72 min-w-[260px] bg-gradient-to-br from-green-400 to-green-700 p-5 rounded-xl flex-shrink-0 shadow-lg transition-transform hover:scale-105">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold bg-green-200 text-green-900 px-3 py-1 rounded text-sm">{data.category || "No Category"}</h3>
                <h4 className="font-semibold text-white">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-white">{data.title || "Completed Task"}</h2>
            <p className="text-sm text-green-100">
                {data.description || "No description provided."}
            </p>
            <div className='flex justify-center mt-4'>
                <span className='text-green-700 font-semibold bg-green-100 px-4 py-2 rounded'>Task Completed</span>
            </div>
        </div>
    );
};

export default CompleteTask;
