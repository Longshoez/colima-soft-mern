import React from 'react'
import { AuthModal } from './AuthModal'

export const Nav = ({minimal, authToken, setShowModal, showModal}) => {

  const handleClick = () => {
    setShowModal(true)
  }

  return (
      <nav>
        {showModal && <AuthModal setShowModal={setShowModal}/>}
        <div className='logo-container'>
          <div className="logo"></div>
        </div>
        {authToken && <button className='nav-button' onClick={handleClick} disabled={showModal}>Login</button>}
      </nav>
  )
}