import React, { useState, useContext } from 'react';
import Header from '../Other/Header';
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';
import AddEmployee from '../Other/AddEmployee';
import EditEmployee from '../Other/EditEmployee';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = () => {
    const { refreshUsers } = useContext(AuthContext);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setEditModalOpen(true);
    };

    const handleCloseEdit = () => {
        setEditModalOpen(false);
        setSelectedEmployee(null);
    };

    const handleRefresh = () => {
        refreshUsers && refreshUsers();
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
            <Header />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <CreateTask />
                <AddEmployee />
                <div className="xl:col-span-2">
                    <AllTask onEdit={handleEdit} onRefresh={handleRefresh} />
                </div>
            </div>
            {editModalOpen && selectedEmployee && (
                <EditEmployee
                    employee={selectedEmployee}
                    onClose={handleCloseEdit}
                    onUpdated={handleRefresh}
                />
            )}
        </div>
    );
};

export default AdminDashboard;
