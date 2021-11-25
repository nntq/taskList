import React from 'react'
import Task from './Task'

const Tasks = ({items,setItems,done,setDone}) => {
    return(
    <div className="tasks">
        {
            items.map(task => (
                <Task done={done} setDone={setDone} setItems={setItems} key={task.id} tasks={items} task={task}/>
            ))
        }
    </div>
    );
};

export default Tasks