/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Home.css'
import Tasks from '../Tasks/Tasks.jsx'

import PropTypes from 'prop-types';
import Task from '../Task/Task.jsx';

const Home = ({onAdd, tasks,onComplete}) => {
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
        <input type='text' className='input-field' placeholder='Add a task' value={Name} onChange={onChangeName}/>
        <button type='submit' className='add-button'>Add</button>
      </form>
      <div className='tasks-section'>
      <div className="your-task">
        <p>Your Tasks</p>
        <div className="br"></div>
      </div>
      {tasks.map(task => <Task key={task.id} task={task} onComplete={onComplete}/>)}
    </div>
    </div>
  )
}

export default Home