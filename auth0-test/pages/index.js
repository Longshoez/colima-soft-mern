import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'

export default function Home() {

  const { user, error, isLoading } = useUser()

  if (isLoading) return <h1>loading</h1>
  if (error) return <h1>Error</h1>

  const getSocial = (input) => {
    let regex = /[a-zA-Z]+/i;
    return input.match(regex);
  }


  console.log(user)

  // getSocial(user.sub) === 'linkedin' &&  window.alert('You have signed up with linkedin, would you like to update your profile with your linkedin data?')


  return (
    user ? (
      <div>
        <img src={user.picture} alt={user.name} style={{ width: '120px' }} />
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <a href="/api/auth/logout">Logout</a>
        <br /><br />
        <br />
        <Link href={'./getlinkedindata'}>get linkedindata</Link>
      </div>
    ) : (
      <div>
        <h1>login</h1>
        <a href="/api/auth/login">Login</a>
      </div>
    )
  )
}
