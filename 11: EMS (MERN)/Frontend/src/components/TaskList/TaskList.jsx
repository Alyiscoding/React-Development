import React, { useContext } from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import { AuthContext } from '../../context/AuthProvider';

const TaskList = ({ data = {} }) => {
    const { tasks = [] } = data;

    return (
        <div
            id="taskList"
            className="w-full py-5 mt-8 flex gap-4 overflow-x-auto md:overflow-x-visible md:flex-wrap"
            style={{ minHeight: '250px' }}
        >
            {tasks && tasks.map((task, idx) => {
                if (task.newTask) {
                    return <NewTask key={task._id} data={task} />;
                }
                if (task.active && !task.newTask) {
                    return <AcceptTask key={task._id} data={task} />;
                }
                if (task.completed) {
                    return <CompleteTask key={task._id} data={task} />;
                }
                if (task.failed) {
                    return <FailedTask key={task._id} data={task} />;
                }
                return null;
            })}
        </div>
    );
};

export default TaskList;