import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import { FaSatelliteDish } from 'react-icons/fa';

function App() {
  const name = 'Jeff';
  const x = false; 
  const[showAddTask, setShowAddTask] = useState(false);
  const[tasks, setTasks] = useState([])

  // useEffect is immediatelly called 
  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks();
  }, [])
  // bottom array on line 24 is the dependcy, as if you wanted to pass in the user.


  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3000/tasks');
    // parsing json data
    const data = await res.json(); 
    // console.log(data);
    return data; 
  }

  // fetch task 

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`);
    // parsing json data
    const data = await res.json(); 
    // console.log(data);
    return data; 
  }

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  // const toggleReminder = (id) => {
  //   setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder}: task))
  //   console.log(id);
  // }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
    console.log(updTask)

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(updTask),
      })
      const data = await res.json();
      console.log(data);

    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:data.reminder}: task))
  }



  //add task
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 1000)
  //   const newTask = { id, ...task }
  //   setTasks([...tasks, newTask]);
  //   console.log(tasks);
  // }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = res.json()
    const id = Math.floor(Math.random() * 1000);
    //updates the object to include an id 
    const newData = {id, ...data}; 

    // setTasks([...tasks, data])
    setTasks([...tasks, newData])
  }

  //toggle add form 
  const toggleAddForm = () => {
    // console.log('hi')
    setShowAddTask(!showAddTask);
  }

  return (
    <div className="container">
      <div className = 'task_subcontainer'>
        <Header title ='Task Tracker' toggle = {toggleAddForm} btnProp = {showAddTask}/> 
        {showAddTask ? <AddTask onAdd = {addTask}/> : ''}
        {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'No tasks to complete'}
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
