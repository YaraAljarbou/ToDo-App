import { FaTrashAlt, FaRegSquare, FaRegCheckSquare } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskItem = ({ taskLink, setCurrentList, currentList }) => {
    
    const [ currentTask, setCurrentTask ] = useState([]);

    useEffect(() => {
        axios.get(taskLink)
            .then(res => setCurrentTask(res.data))
            .catch(err => console.log(err));
    }, [])
    
    const checkTask = () => {
        axios.put(taskLink, { ...currentTask, is_complete: true })
            .then(res => {
                let newTask = {...currentTask}
                newTask.is_complete = true
                setCurrentTask(newTask)
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    const unCheckTask = () => {
        axios.put(taskLink, { ...currentTask, is_complete: false })
            .then(res => {
                let newTask = {...currentTask}
                newTask.is_complete = false
                setCurrentTask(newTask)
                console.log(res)
            })
            .catch(err => console.log(err));
    }
    
    const deleteTask = () => {
        axios.delete(taskLink)
            .then(res => {
                let newList = {...currentList}
                newList.tasks = newList.tasks.filter(task => task !== taskLink)
                setCurrentList(newList) 
                console.log(res)
            })
            .catch(err => console.log(err));
    }
    
    return (
        <>
            <tr>
                <td scope="row">
                {
                    currentTask.is_complete ?
                    <h5 className="col text-secondary font-weight-normal"><del>{currentTask.title}</del></h5>
                    : <h5 className="col font-weight-normal">{currentTask.title}</h5>
                }
                </td>
                <td>{currentTask.notes}</td>
                <td>{currentTask.priority}</td>
                <td>{currentTask.category}</td>
                <td>{currentTask.due_date}</td>
                <td>
                {
                    currentTask.is_complete ?
                    <button type="button" className="btn btn-sm mx-1" style={{backgroundColor: `${currentList.color}`}} onClick={ unCheckTask }><FaRegCheckSquare /></button>
                    : <button type="button" className="btn btn-sm mx-1" style={{backgroundColor: `${currentList.color}`}} onClick={ checkTask }><FaRegSquare /></button>
                }
                
                <button type="button" className="btn ml-2 btn-sm" style={{backgroundColor: `${currentList.color}`}} onClick={ deleteTask }><FaTrashAlt /></button>
                </td>
            </tr>
        </>
        
    );
}

export default TaskItem;