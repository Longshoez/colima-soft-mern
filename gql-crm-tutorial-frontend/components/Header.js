import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { useRouter } from 'next/router'

const OBTENER_USUARIO = gql`
#como el token lo tenemos en el context, no necesitamos pasarle el token
  query ObtenerUsuario{
    obtenerUsuario {
      id
      nombre
      apellido
    }
  }
`

const Header = () => {

  const { data, loading, error } = useQuery(OBTENER_USUARIO)
  const router = useRouter()

  if (loading) return null

  //si no hay informacion indica que no hay sesion activa, regresar al usuario al
  // if (data.obtenerUsuario?.apellido === undefined) {
  //   router.push('/login')
  // }

  const cerrarSesion = () => {
    localStorage.removeItem('token') //removes token from local storage invalidating the store
    router.push('/login')
  }

  return (
    <div className='flex justify-end'>
      <p className="mr-2 py-2 px-2 ">{data.obtenerUsuario?.nombre} {data.obtenerUsuario?.apellido}</p>
      <button type='button' onClick={() => cerrarSesion()} className='bg-blue-700 sm:w-auto py-2 px-2 text-white font-bold rounded shadow-md'>
        cerrar sesion
      </button>
    </div>
  )
}

export default Header