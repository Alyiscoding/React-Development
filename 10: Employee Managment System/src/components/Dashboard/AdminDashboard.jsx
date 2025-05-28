import React from 'react';
import Header from '../Other/Header';
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';

const AdminDashboard = (props) => {
    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
            <Header changeUser={props.changeUser} />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <CreateTask />
                <AllTask />
            </div>
        </div>
    );
};

export default AdminDashboard;