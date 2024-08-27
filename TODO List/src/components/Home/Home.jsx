/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import Tasks from '../Tasks/Tasks'

const Home = () => {
  return (
    <div className='home'>
      <form className='form' >
        <input type='text' className='input-field' placeholder='Add a task' />
        <button type='submit' className='add-button'>Add</button>
      </form>
      <Tasks/>
    </div>
  )
}

export default Home