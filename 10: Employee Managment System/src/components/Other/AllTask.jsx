
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const authData = useContext(AuthContext);

    // For mobile labels
    const labels = ["Employee Name", "New Task", "Active", "Completed", "Failed"];

    return (
        <div className="bg-white border border-blue-200 rounded-2xl shadow-xl p-6 sm:p-8 w-full">
            <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">All Tasks</h2>
            <div className='overflow-x-auto'>
                {/* Header: Only show on md+ */}
                <div className='hidden md:grid grid-cols-5 bg-blue-100 text-blue-900 font-semibold text-center rounded-md mb-4'>
                    {labels.map(label => (
                        <div key={label} className='p-2'>{label}</div>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    {authData && Array.isArray(authData.employees) && authData.employees.length > 0 ? (
                        authData.employees.map((employee, idx) => (
                            // Responsive row: grid on md+, stacked on mobile
                            <div
                                key={idx}
                                className={`grid md:grid-cols-5 grid-cols-1 text-center rounded-xl shadow-md border border-blue-100 bg-gray-50 transition
                                    hover:bg-blue-50`}
                            >
                                {/* Desktop: just values. Mobile: label + value */}
                                <div className="md:p-2 flex md:block items-center border-b md:border-0 border-blue-100">
                                    <span className="block md:hidden w-32 text-xs font-semibold text-blue-500 mr-2 text-left">Employee Name:</span>
                                    <span className="text-gray-700">{employee.name}</span>
                                </div>
                                <div className="md:p-2 flex md:block items-center border-b md:border-0 border-blue-100">
                                    <span className="block md:hidden w-32 text-xs font-semibold text-blue-500 mr-2 text-left">New Task:</span>
                                    <span className="text-blue-600">{employee.taskCounts.new}</span>
                                </div>
                                <div className="md:p-2 flex md:block items-center border-b md:border-0 border-blue-100">
                                    <span className="block md:hidden w-32 text-xs font-semibold text-blue-500 mr-2 text-left">Active:</span>
                                    <span className="text-yellow-600">{employee.taskCounts.active}</span>
                                </div>
                                <div className="md:p-2 flex md:block items-center border-b md:border-0 border-blue-100">
                                    <span className="block md:hidden w-32 text-xs font-semibold text-blue-500 mr-2 text-left">Completed:</span>
                                    <span className="text-green-600">{employee.taskCounts.completed}</span>
                                </div>
                                <div className="md:p-2 flex md:block items-center">
                                    <span className="block md:hidden w-32 text-xs font-semibold text-blue-500 mr-2 text-left">Failed:</span>
                                    <span className="text-red-600">{employee.taskCounts.failed}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-gray-500 text-center py-8 bg-gray-50 rounded">
                            No employees found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllTask;
