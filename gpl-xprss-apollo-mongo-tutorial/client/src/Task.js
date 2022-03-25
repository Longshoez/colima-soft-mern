import React from 'react'
import './index.css'

export const Task = ({index, title, description, func = console.log('function')}) => {
  return (
    <div key={index} className='taskContainer'>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <button onClick={func}>Delete</button>      
    </div>
  )
}