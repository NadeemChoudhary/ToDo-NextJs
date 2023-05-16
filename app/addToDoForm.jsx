"use client"
import React from 'react'

const addToDoForm = () => {
  return (
    <div className="login">
    <form>
        <input type='text' placeholder='Task Title' />
        <input type='text' placeholder='Task Description' />
        <button className='loginBTN'>Add Task</button>
    </form>
</div>
  )
}

export default addToDoForm