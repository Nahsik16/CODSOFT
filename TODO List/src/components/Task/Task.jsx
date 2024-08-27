/* eslint-disable no-unused-vars */
import React from 'react'
import './Task.css'
const Task = () => {
  return (
    <div className='task-list'>
      <div className='task'>
        <p className='task-text'>Task 1</p>
        <div className='options'>
          <button className='edit-button'>Edit</button>
          <button className='complete-button'>Complete</button>
          <button className='delete-button'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Task