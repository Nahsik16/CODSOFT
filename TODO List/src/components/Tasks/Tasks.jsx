/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import './Tasks.css'
import Task from '../Task/Task'

const Tasks = ({tasks}) => {
  return (
    <div className='tasks-section'>
      <div className="your-task">
        <p>Your Tasks</p>
        <div className="br"></div>
      </div>
      {tasks.map(task => <Task key={task.id} task={task}/>)}
    </div>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default Tasks