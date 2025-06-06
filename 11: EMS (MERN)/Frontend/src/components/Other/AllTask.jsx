import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const AllTask = ({ onEdit, onRefresh }) => {
  const { employees = [] } = useContext(AuthContext);

  const labels = ["Employee Name", "New Task", "Accepted", "Completed", "Failed", "Actions"];

  const handleDelete = async (employee) => {
    if (!window.confirm(`Are you sure you want to delete ${employee.name}? This will also delete all their tasks.`)) return;
    const res = await fetch(`http://localhost:4000/delete-user/${employee._id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.success) {
      toast.success('Employee deleted!');
      onRefresh && onRefresh();
    } else {
      toast.error(data.message || 'Failed to delete employee');
    }
  };

  return (
    <div className="bg-white border border-blue-200 rounded-2xl shadow-xl p-2 sm:p-4 md:p-8 w-full">
      <div className="flex items-center gap-3 mb-8">
        <span className="inline-block w-2 h-8 bg-blue-600 rounded-full"></span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-700 tracking-wide">All Employees & Tasks</h2>
      </div>
      <div className="overflow-x-auto lg:overflow-x-visible">
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-blue-100 text-blue-900 font-semibold text-center rounded-md mb-4 sticky top-0 z-10 shadow-sm">
          {labels.map(label => (
            <div key={label} className="p-2 sm:p-3 text-sm sm:text-base tracking-wide">{label}</div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {employees && employees.length > 0 ? (
            employees.map((employee, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 text-center rounded-2xl shadow-md border border-blue-100 bg-gradient-to-br ${idx % 2 === 0 ? 'from-blue-50 to-blue-100' : 'from-white to-gray-100'} transition hover:scale-[1.01] hover:shadow-lg duration-150`}
              >
                <div className="p-2 sm:p-3 flex md:block items-center border-b md:border-0 border-blue-100">
                  <span className="block md:hidden w-32 text-xs font-semibold text-blue-500 mr-2 text-left">Employee Name:</span>
                  <span className="text-gray-800 font-semibold text-base">{employee.name}</span>
                </div>
                <div className="p-2 sm:p-3 flex md:block items-center border-b md:border-0 border-blue-100">
                  <span className="block md:hidden w-32 text-xs font-semibold text-blue-500 mr-2 text-left">New Task:</span>
                  <span className="inline-block bg-blue-200 text-blue-700 font-bold px-3 py-1 rounded-full text-sm shadow-sm">{employee.taskCounts?.new || 0}</span>
                </div>
                <div className="p-2 sm:p-3 flex md:block items-center border-b md:border-0 border-blue-100">
                  <span className="block md:hidden w-32 text-xs font-semibold text-blue-500 mr-2 text-left">Accepted:</span>
                  <span className="inline-block bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded-full text-sm shadow-sm">{employee.taskCounts?.active || 0}</span>
                </div>
                <div className="p-2 sm:p-3 flex md:block items-center border-b md:border-0 border-blue-100">
                  <span className="block md:hidden w-32 text-xs font-semibold text-blue-500 mr-2 text-left">Completed:</span>
                  <span className="inline-block bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm shadow-sm">{employee.taskCounts?.completed || 0}</span>
                </div>
                <div className="p-2 sm:p-3 flex md:block items-center border-b md:border-0 border-blue-100">
                  <span className="block md:hidden w-32 text-xs font-semibold text-blue-500 mr-2 text-left">Failed:</span>
                  <span className="inline-block bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-sm shadow-sm">{employee.taskCounts?.failed || 0}</span>
                </div>
                <div className="p-2 sm:p-3 flex flex-col md:flex-row items-center gap-2 justify-center border-b md:border-0 border-blue-100">
                  <button
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition mt-2 md:mt-2 lg:mt-0 mb-1 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    onClick={() => onEdit && onEdit(employee)}
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2H7v-2l6-6z' /></svg>
                    Edit
                  </button>
                  <div className="w-full md:w-auto flex items-center justify-center">
                    <span className="block md:hidden w-full h-1 bg-gray-200 rounded my-1"></span>
                  </div>
                  <button
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition focus:outline-none focus:ring-2 focus:ring-red-300"
                    onClick={() => handleDelete(employee)}
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /></svg>
                    Delete
                  </button>
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
