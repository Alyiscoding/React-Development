import React from 'react';

export const AcceptTask = ({data}) => {
    return (
        <div className="w-72 min-w-[260px] bg-gradient-to-br from-blue-500 to-blue-700 p-5 rounded-xl flex-shrink-0 shadow-lg transition-transform hover:scale-105">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold bg-blue-200 text-blue-900 px-3 py-1 rounded text-sm">{data.category || "No Category"}</h3>
                <h4 className="font-semibold text-white">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-white">{data.title || "Accept Task"}</h2>
            <p className="text-sm text-blue-100">
                {data.description || "No description provided."}
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded shadow transition-colors text-sm'>Mark as Completed</button>
                <button className='bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded shadow transition-colors text-sm'>Mark as Failed</button>
            </div>
        </div>
    );
};

export default AcceptTask;
