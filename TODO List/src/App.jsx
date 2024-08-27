/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const [tasks,setTasks]= useState([]);
  function addTask(Name){
    setTasks([...tasks,
      {
        id: uuidv4(),
        Name: Name,
        isCompleted:false
      }
    ]);
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId));
  }
  function editTask(taskId, newTaskName){
    setTasks(tasks.map(task => task.id === taskId ? {...task, taskName: newTaskName} : task));
  }
  function completeTask(taskId){
    setTasks(tasks.map(task => task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task));
  }

  return (
    <div className='app'>
      <Header/>
      <Home onAdd={addTask} tasks={tasks} onComplete={completeTask}/>
      </div>
  )
}

export default App