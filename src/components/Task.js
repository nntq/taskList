import React,{useState} from 'react'
import DeletePopup from './DeletePopup'

const Task = ({task,tasks,setItems,done,setDone}) => {

   
    const [remove, setRemove] = useState(false); 


    let start=0;
    let interval=true;

    const downHandler = () => {
        interval = setInterval(() => {
            if(start===11){
                setRemove(true);
                clearInterval(interval);
                return;
            }
            console.log(start);
            start+=1;
        }, 100);
    }

    const contains = (list,id) => {
        for(let i=0; i<list.length;i++){
            if(list[i].id===id)
                return true;
        }
        return false;
    }

    const upHandler = () => {
        clearInterval(interval);

        if(start<=10){

            if(contains(done,task.id)){
            setDone(done.map((item) => {
                if(item.id === task.id){
                    return{
                        ...item, time: item.time+1
                    }
                }
                return item;
            }))
        }else{
            setDone([
                ...done,
                {text: task.text, id: task.id, time: 1}
            ])

        }
    }
            
        start=0;
    }

    return(
        
        <div onMouseDown={downHandler} onMouseUp={upHandler} className="task">
            {remove&&<DeletePopup setItems={setItems} tasks={tasks} task={task} setRemove={setRemove}/>}
            <p>{task.text}</p>
        </div>

    )
}

export default Task