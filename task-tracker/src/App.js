import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const name = 'Jeff';
  const x = false; 
  const[tasks, setTasks] = useState([
    { 
        id: 1,
        text: 'Doc Appt',
        day: 'Feb 5th @ 1:00pm',
        reminder: 'true'
    },
    {
        id: 2,
        text: 'Dentist Appt',
        day: 'Feb 7th @ 1:00pm',
        reminder: 'false'
    },
    {
        id: 3,
        text: 'School Appt',
        day: 'Feb 19th @ 1:00pm',
        reminder: 'true'
    }
  ])

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <div className = 'task_subcontainer'>
        <Header title ='Task Tracker' /> 
        {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask}/> : 'No tasks to complete'}
      </div>
      {/* retrieve prop */}
      {/* <h1> Hey, what's going on {name}</h1>
      <p> { x ? 'It is' : "It is not"} time to work </p>       */}
    </div>

    // class App extends React.component {
    //   render(){
    //     return <h1>Hell from a class </h1>
    //   }
    // }
  );
}

export default App;
