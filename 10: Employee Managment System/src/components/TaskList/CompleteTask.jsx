import React from 'react';

export const CompleteTask = ({data}) => {
    return (
        <div className="w-72 min-w-[260px] bg-gradient-to-br from-green-400 to-green-700 p-5 rounded-xl flex-shrink-0 shadow-lg transition-transform hover:scale-105">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold bg-green-200 text-green-900 px-3 py-1 rounded text-sm">{data.category || "No Category"}</h3>
                <h4 className="font-semibold text-white">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-white">{data.title || "Accept Task"}</h2>
            <p className="text-sm text-green-100">
                {data.description || "No description provided."}
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded shadow transition-colors text-sm'>View Details</button>
                <button className='bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded shadow transition-colors text-sm'>Archive</button>
            </div>
        </div>
    );
};

export default CompleteTask;
