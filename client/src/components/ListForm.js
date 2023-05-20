import React, { useState } from 'react';
import axios from 'axios';

const ListForm = ( { lists, setLists } ) => {
   
   const [ newList, setNewList ] = useState({
      title: '',
      tasks: [],
      color: ''
   });

   const addList = (e) => {
      axios.post('http://127.0.0.1:8000/api/lists/', newList )
         .then(res => setLists([...lists, res.data]))
         .catch(err => console.log(err));

      setNewList({
         title: '',
         tasks: [],
         color: ''
      });
   }

   const onChange = (e) => {
      setNewList({...newList, [e.target.name]:e.target.value})
   }

   return (
      <div className="input-group mb-3 card-header">
         <div className="col">
               <div className="input-group-prepend">
                  <span className="input-group-text">Title</span>
               </div>
               <input type="text" className="form-control" name="title" 
               value={newList.title} onChange={ onChange } />
         </div>
         <div className="col">
               <div className="input-group-prepend">
                  <span className="input-group-text">Color</span>
               </div>
               <input type="text" className="form-control" name="color"
               value={newList.color} onChange={ onChange } />
         </div>
         <button type="button" className="btn btn-dark" onClick={ addList }>Add</button>
      </div>
   );
}

export default ListForm;
