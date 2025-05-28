
import React from 'react';

const TaskListNumber = ({data}) => {
    return ( 
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="rounded-xl py-7 px-4 sm:px-6 bg-gradient-to-br from-purple-400 to-purple-700 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-200">
                <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow">{data.taskCounts.new}</h2>
                <h3 className="text-base sm:text-xl font-medium text-white/90 mt-1">New Task</h3>
            </div>
            <div className="rounded-xl py-7 px-4 sm:px-6 bg-gradient-to-br from-blue-500 to-blue-700 flex flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-200">
                <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow">{data.taskCounts.active}</h2>
                <h3 className="text-base sm:text-xl font-medium text-white/90 mt-1">Accepted</h3>
            </div>
            <div className="rounded-xl py-7 px-4 sm:px-6 bg-gradient-to-br from-green-400 to-green-700 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-200">
                <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow">{data.taskCounts.completed}</h2>
                <h3 className="text-base sm:text-xl font-medium text-white/90 mt-1">Completed</h3>
            </div>
            <div className="rounded-xl py-7 px-4 sm:px-6 bg-gradient-to-br from-red-400 to-red-700 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-200">
                <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow">{data.taskCounts.failed}</h2>
                <h3 className="text-base sm:text-xl font-medium text-white/90 mt-1">Failed</h3>
            </div>
        </div>
    );
}

export default TaskListNumber;
