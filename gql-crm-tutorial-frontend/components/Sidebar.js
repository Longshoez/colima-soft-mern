import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Sidebar = () => {

  const router = useRouter()

  //console.log(router.pathname)

  return (
    <aside className='bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5'>
      <div>
        <p className='text-white text-2xl font-black'>CRM Clientes</p>
      </div>
      <nav className='mt-10 list-none5'>
        <li className={`text-white mb-2 block ${router.pathname === '/' && 'bg-blue-800 p-3'}`}><Link href='/'><a className='pr-20'>Clientes</a></Link></li>
        <li className={`text-white mb-2 block ${router.pathname === '/pedidos' && 'bg-blue-800 p-3'}`}><Link href='/pedidos'><a className='pr-20'>Pedidos</a></Link></li>
        <li className={`text-white mb-2 block ${router.pathname === '/productos' && 'bg-blue-800 p-3'}`}><Link href='/productos'><a className='w-full pr-20'>Productos</a></Link></li>
      </nav>
    </aside>
  )
}

export default Sidebar