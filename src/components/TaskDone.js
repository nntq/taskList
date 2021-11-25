import React from 'react'

const TaskDone = ({done,setDone,task}) => {

    const countTimes = () => {
        let out = '';
        for(let i=0;i<task.time;i++){
            out+='◯ '
        }
        console.log(out);
        return out;
    }

    const removeHandler = () => {
        setDone(done.map(item => {
            if(item.id===task.id){
                return{
                    ...item, time: item.time-1
                };
            }
            return item;
        }))
    }

    return(
        <div className="done__task">
                <h4>{task.text}</h4>
                <span>{countTimes()}</span>
                <button onClick={removeHandler}>remove</button>
            </div>
    )
}

export default TaskDone