/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'; 
import './Task.css'
import { LuClipboardEdit } from "react-icons/lu";
const Task = ({task,onComplete}) => {
  return (
    <div className='task-list'>
      <div className='task'>
        <p className='task-text'>{task.Name}</p>
        <div className='options'>
          <button className='edit-button'><LuClipboardEdit size={20}/></button>
          <button className='complete-button' onClick={()=>
            onComplete(task.id)
          }>Complete</button>
          <button className='delete-button'>Delete</button>
        </div>
      </div>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default Task