import React from 'react'
import TaskDone from './TaskDone'

const TasksDone = ({done,setDone}) => {
    return(
        <div className="done__today">
        <h1>Today's tasks</h1>
        <ul className="done__list">
            {
            done.map(task => (
                <TaskDone key={task.id} task={task} done={done} setDone={setDone}/>
            ))
            }
        </ul>
    </div>
    );
}

export default TasksDone