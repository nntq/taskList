import React from 'react'



const DeletePopup = ({setRemove,task,tasks,setItems}) => {

    const cancelHandler = () => {
        setRemove(false)
    }

    const deleteHandler = () => {
        setItems(tasks.filter(item => item.id!==task.id))
    }

    return(
        <div className="delete__popup">
            <div className="delete__box__p">
                <h1>Remove this task?</h1>
                <div className="delete__buttons__p">
                    <button onClick={deleteHandler}>Yes</button>
                    <button onClick={cancelHandler}>No</button>
                </div>
                
            </div>
        </div>
    );
}

export default DeletePopup;