import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = ({ id }) => {

    const [ currentList, setCurrentList ] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/lists/${id}`)
            .then(res => setCurrentList(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div className="navbar navbar-dark justify-content-between" style={{backgroundColor: `${currentList.color}`}}>
                <h1 className="mx-3 text-light">The - {currentList.title} - List</h1>
                <button type="button" className="btn mx-3 text-light" style={{backgroundColor: `${currentList.color}`}} onClick={ () => navigate('/') }>Go Back</button>
            </div>
            
            <div className="container card">
                <div className="card-header">
                    <TaskForm id={id} currentList={currentList} setCurrentList={setCurrentList} />
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Notes</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Category</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentList.tasks && currentList.tasks.map((taskLink, index) => 
                                    <TaskItem 
                                        key={index}
                                        taskLink={taskLink}
                                        currentList={currentList} 
                                        setCurrentList={setCurrentList}
                                    />
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TaskList;