import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { FaTrashAlt } from 'react-icons/fa';

const Lists = ( { lists, setLists } ) => {

   const DeleteList = (id) => {
      axios.delete(`http://127.0.0.1:8000/api/lists/${id}`)
         .then(res =>{
            let newLists = [...lists]
            newLists = newLists.filter(list => list.id !==id)
            setLists(newLists)
            console.log(res)
         })
         .catch(err => console.log(err));
   }

   return (
      <>
         {
            lists.map((list, index) =>
               <div key={index} className="row mb-1 px-4">
                  <h5 className="col font-weight-normal" ><Link style={{color: `${list.color}`}} to={`/lists/${list.id}`}>{list.title}</Link></h5>
                  <button type="button" className="col-1 btn ml-2 btn-sm" style={{backgroundColor: `${list.color}`}} onClick={ () => DeleteList(list.id) }><FaTrashAlt /></button>
               </div>
            )
         }
      </>
   )
}

export default Lists;
