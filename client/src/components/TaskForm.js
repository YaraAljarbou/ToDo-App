import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ id, currentList, setCurrentList }) => {
    
    const [ newTask, setNewTask ] = useState({
        title: '',
        notes: '',
        priority: 'None',
        category: '',
        is_complete: false,
        the_list: `http://127.0.0.1:8000/api/lists/${id}/`,
        due_date: ''
    });

    const addTask = () => {
        axios.post('http://127.0.0.1:8000/api/tasks/', newTask )
            .then(res => {
                let newList = {...currentList}
                newList.tasks = [...newList.tasks,`http://127.0.0.1:8000/api/tasks/${res.data.id}/` ]
                setCurrentList(newList)
            })
            .catch(err => console.log(err));

            setNewTask({
            title: '',
            notes: '',
            priority: 'None',
            category: '',
            is_complete: false,
            the_list: `http://127.0.0.1:8000/api/lists/${id}/`,
            due_date: ''
        });
    }

    const onChangeFields = (e) => {
        setNewTask({...newTask, [e.target.name]:e.target.value})
    }

    return (
        <div className="input-group my-3">
            <div className="col">
                <div className="input-group-prepend">
                    <span className="input-group-text">Title</span>
                </div>
                <input type="text" className="form-control" name="title" 
                value={newTask.title} onChange={ onChangeFields } />
            </div>
            <div className="col">
                <div className="input-group-prepend">
                    <span className="input-group-text">Notes</span>
                </div>
                <input type="text" className="form-control" name="notes"
                value={newTask.notes} onChange={ onChangeFields } />
            </div>
            <div className="col">
                <div className="input-group-prepend">
                    <span className="input-group-text">Priority</span>
                </div>
                <select className="form-control" name="priority" value={newTask.priority} onChange={ onChangeFields }>
                    <option value="" ></option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div className="col">
                <div className="input-group-prepend">
                    <span className="input-group-text">Category</span>
                </div>
                <input type="text" className="form-control" name="category"
                value={newTask.category} onChange={ onChangeFields } />
            </div>
            <div className="col">
                <div className="input-group-prepend">
                    <span className="input-group-text">Due Date</span>
                </div>
                <input type="date" className="form-control" name="due_date"
                value={newTask.due_date} onChange={ onChangeFields } />
            </div>
            <button type="button" className="btn" style={{backgroundColor: `${currentList.color}`}} onClick={ addTask }>Add</button>
        </div>
    );
}

export default TaskForm;
