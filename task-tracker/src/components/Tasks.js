import React from "react";
import Task from "./Task";

// const taskArr = [
//     {
//         id: 1,
//         text: 'Doc Appt',
//         day: 'Feb 5th @ 1:00pm',
//         reminder: 'true'
//     },
//     {
//         id: 2,
//         text: 'Dentist Appt',
//         day: 'Feb 7th @ 1:00pm',
//         reminder: 'false'
//     }
// ]

const Tasks = ({ tasks, onDelete, onToggle }) => {
  //remember state is immutable
  //   setTasks([...tasks, {}])
  return (
    <div className="task_container">
      {/* {taskArr.map((task) => <h3 key = {task.id}>{task.text}</h3>)} */}
      {/* {tasks.map((task) => <h3 key = {task.id}>{task.text}</h3>)} */}
      {/* mapping over singleTask component */}
      {tasks.map((task) => ( 
        <Task key={task.id} task={task} onDelete={onDelete} onToggle = {onToggle} />
      ))}
    </div>
  );
};

export default Tasks;
