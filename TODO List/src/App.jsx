/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { v4 as uuidv4 } from 'uuid';
const LOCAL_STORAGE_KEY = 'tasks';
const App = () => {
  const [tasks,setTasks]= useState([]);
  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }
  
  useEffect(() => {
    loadSavedTasks();
  }, [])

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
  function addTask(Name){
    setTasksAndSave([...tasks,
      {
        id: uuidv4(),
        Name: Name,
        isCompleted:false
      }
    ]);
  }
  
  function deleteTask(taskId){
    const newTasks =tasks.filter(task => task.id !== taskId)
    setTasksAndSave(newTasks);

  }
  function completeTask(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: true
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <div className='app'>
      <Header/>
      <Home onAdd={addTask} tasks={tasks} onDelete={deleteTask}  onComplete={completeTask}/>
      </div>
  )
}

export default App