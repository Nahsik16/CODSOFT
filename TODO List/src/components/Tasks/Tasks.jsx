/* eslint-disable no-unused-vars */
import React from 'react'
import './Tasks.css'
import Task from '../Task/Task'
const Tasks = () => {
  return (
    <div className='tasks-section'>
      <div className="your-task">
        <p>Your Tasks</p>
        <div className="br"></div>
      </div>
      <Task/>
    </div>
  )
}

export default Tasks