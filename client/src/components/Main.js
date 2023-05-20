
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ListForm from './ListForm';
import Lists from './Lists';

function Main() {

   const [ lists, setLists ] = useState([]);
   const [ loaded, setLoaded ] = useState(false);

   useEffect( () => {
      axios.get('http://127.0.0.1:8000/api/lists/')
         .then(res => {
         setLists(res.data);
         setLoaded(true);
         })
         .catch(err => console.log(err));
   }, []);

   return (
      <div>
         <h1 className="navbar navbar-dark bg-dark text-light justify-content-center">My ToDo List...</h1>
         <div className="container card w-50">
            <ListForm lists={lists} setLists={setLists} />
            <Lists lists={lists} setLists={setLists} />
         </div>
      </div>
   );
}

export default Main;
