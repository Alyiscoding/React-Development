import React from 'react';

export const FailedTask = ({ data, employeeName, onStatusChange }) => {
    return (
        <div className="w-72 min-w-[260px] bg-gradient-to-br from-red-400 to-red-700 p-5 rounded-xl flex-shrink-0 shadow-lg transition-transform hover:scale-105">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold bg-red-200 text-red-900 px-3 py-1 rounded text-sm">{data.category || "No Category"}</h3>
                <h4 className="font-semibold text-white">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-white">{data.title || "Failed Task"}</h2>
            <p className="text-sm text-red-100">
                {data.description || "No description provided."}
            </p>
            <div className='flex justify-center mt-4'>
                <span className='text-red-700 font-semibold bg-red-100 px-4 py-2 rounded'>Task Failed</span>
            </div>
        </div>
    );
};

export default FailedTask;
