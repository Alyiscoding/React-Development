import React from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
    return (
        <div
            id="taskList"
            className="w-full py-5 mt-8 flex gap-4 overflow-x-auto md:overflow-x-visible md:flex-wrap"
            style={{ minHeight: '250px' }}
        >
            {data.tasks.map((task, idx) => {
                if (task.newTask) {
                    // Only show as NewTask if newTask is true
                    return <NewTask key={idx} data={task} />;
                }
                if (task.active && !task.newTask) {
                    // Show as AcceptTask if active but not newTask
                    return <AcceptTask key={idx} data={task} />;
                }
                if (task.completed) {
                    return <CompleteTask key={idx} data={task} />;
                }
                if (task.failed) {
                    return <FailedTask key={idx} data={task} />;
                }
                return null;
            })}
        </div>
    );
}

export default TaskList;
