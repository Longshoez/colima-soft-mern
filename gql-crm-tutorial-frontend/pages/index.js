import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 className='text-2xl text-gray-800 font-light'>Clientes </h1>
      </Layout>
    </div>
  )
}
