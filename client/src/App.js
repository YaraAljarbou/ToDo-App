import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import TaskList from './components/TaskList';
import Main from './components/Main';

function App() {

  return (
    <Router>
      <Main path='/' />
      <TaskList path='lists/:id' />
    </Router>
  );
}

export default App;
