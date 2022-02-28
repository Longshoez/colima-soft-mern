import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  //obtener useContext y extraer valores de UserContext
  const {user, setUser} = useContext(UserContext)
  //extraer funcion seUser

  return (
    <>
      <h1>LoginScreen</h1>
      <hr />      
      <button className='btn btn-primary' onClick={() => setUser({
        id: 123,
        name: 'Gabriel'
      })}>Save NAme</button>
    </>
  )
}
