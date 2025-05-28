import React from 'react';
import Header from '../Other/Header';
import TaskListNumber from '../Other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {

  return (
    <div className="p-2 sm:p-4 md:p-6 min-h-screen bg-gray-50">
      {/* <h1>{data.id}</h1> */}
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
}

export default EmployeeDashboard;
