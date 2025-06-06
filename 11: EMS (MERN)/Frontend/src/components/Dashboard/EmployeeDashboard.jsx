import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Header from '../Other/Header';
import TaskListNumber from '../Other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) return null;

    return (
        <div className="p-2 sm:p-4 md:p-6 min-h-screen bg-gray-50">
            <Header />
            <TaskListNumber data={currentUser} />
            <TaskList data={currentUser} />
        </div>
    );
};

export default EmployeeDashboard;