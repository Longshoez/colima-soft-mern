import { gql, useMutation, useQuery } from '@apollo/client'
import React from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

const OBTENER_PRODUCTOS = gql`
  query ObtenerProductos {
    obtenerProductos {
      id
      nombre
      existencia
      precio
      creado
    }
  }
`

const productos = () => {


  const { data, loading, error } = useQuery(OBTENER_PRODUCTOS)
  const router = useRouter()

  // if (data === undefined) {
  //   router.push('/login')
  // }

  return (
    <div>
      <Layout>
        {
          loading ? <h1 className='text-2xl text-gray-800 font-light'>Cargando...</h1> :
            <>
              <h1 className='text-2xl text-gray-800 font-light'>Productos</h1>
              <table className='table-auto shadow-md mt-10 w-full w-lg'>
                <thead className='bg-gray-800'>
                  <tr className='text-white'>
                    <th className='w-1/3 py-2'>Nombre</th>
                    <th className='w-1/3 py-2'>Existencia</th>
                    <th className='w-1/3 py-2'>Precio</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {/* i could've put a ? after op so if it returned a null this wouldnt break but i preffered to put it inside the laoding conditional to display a loader in the future */}
                  {data.obtenerProductos?.map(producto => (
                    <tr key={producto.id}>
                      <td className='border w-1/5 py-2 px-4'>{producto.nombre}</td>
                      <td className='border w-1/5 py-2 px-4'>{producto.existencia}</td>
                      <td className='border w-1/5 py-2 px-4'>${producto.precio}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </>
        }

      </Layout>
    </div>
  )
}

export default productos