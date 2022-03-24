import React, { useState } from 'react'
import {Nav} from '../components/Nav'

export const Home = () => {

  const authToken = true
  const [showModal, setShowModal] = useState(true)
  
  const handleClick = () => {
    console.log('something?')
    setShowModal(true)
  }

  return (
    <div className='overlay'>
      <Nav minimal={false} authToken={authToken} setShowModal={setShowModal} showModal={showModal}/>
      <div className="home">
        <div>
          <h1>Swipe up</h1>
          <button className='primary-button' onClick={handleClick}>
            {authToken ? 'Log in' : 'Create Account'}
          </button>
        </div>
      </div>
    </div>
  )
}