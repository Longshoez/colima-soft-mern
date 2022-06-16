import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0'

export default function Home() {

  const { user, error, isLoading } = useUser()

  if (isLoading) return <h1>loading</h1>
  if (error) return <h1>Error</h1>

  return (
    user ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <a href="/api/auth/logout">Logout</a>
      </div>
    ) : (
      <div>
        <h1>login</h1>
        <a href="/api/auth/login">Login</a>
      </div>
    )
  )
}
