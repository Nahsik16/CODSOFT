/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Home.css'
import PropTypes from 'prop-types';
import Task from '../Task/Task.jsx';
import { GrAddCircle } from "react-icons/gr";

const Home = ({onAdd, tasks,onComplete,onDelete}) => {
  
  const [Name,setName] =useState('');
  function handleSubmit(e){
    e.preventDefault();
    if(Name){
      onAdd(Name);
    }
    setName('');
  }
  function onChangeName(e){
    setName(e.target.value);
  }

Home.propTypes = {
  onAdd: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
};
  return (
    <div className='home'>
      <form onSubmit={handleSubmit} className='form' >
        <input type='text' className='input-field' placeholder='Add a task' required value={Name} onChange={onChangeName}/>
        <button type='submit' className='add-button'>Add <GrAddCircle size={20}/></button>
      </form>
      <div className='tasks-section'>
      <div className="your-task">
        <div  className='p'>Your Tasks</div> 
      </div>
      <div className="br"></div>
      {tasks.map(task => <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>)}
    </div>
    </div>
  )
}

export default Home