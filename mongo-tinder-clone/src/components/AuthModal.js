import React, {useState} from 'react'
import '../index.css'

export const AuthModal = ({setShowModal}) => {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)

  const handleClick = () => {
    setShowModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if(isSignedUp && password != confirmPassword){
        setError('Passwords need to match')
      }
    }catch(error){
      console.log(error)
    }
  }

  const isSignedUp = true

  return (
    <div className="authModal">
      <div>
        <h2>{isSignedUp? 'Create Account' : 'Login'}</h2>  
        <form onSubmit={handleSubmit}>
          <input className="input" type="email" name="email" id="email" placeholder='email' required={true} onChange={(e) => setEmail(e.target.value)}/>
          <input className="input" type="password" name="password" id="password" placeholder='confirm password' required={true} onChange={(e) => setEmail(e.target.value)}/>
          {isSignedUp && <input className="input" type="password-check" name="password-check" id="password-check" placeholder='confirm password' required={true} onChange={(e) => setEmail(e.target.value)}/>}
          <input type="submit" value="Continue" className='secondary-button'/>
          <p>{error}</p>
        </form>
        <button className='close-icon' onClick={handleClick}>x</button>
      </div>
    </div>
  )
}