import { useUser } from '@auth0/nextjs-auth0'
import React, { useState } from 'react'


const examplepage = () => {

  const { user } = useUser()


  return (
    user ? (
      <div>
        authorized
        <p>{user.email}</p>
      </div >
    ) : (
      <p>cant access this page</p>
    )
  )
}

export default examplepage