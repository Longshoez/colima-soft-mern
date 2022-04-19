import { gql, useQuery } from '@apollo/client'
import React from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

const OBTENER_PEDIDOS = gql`
query ObtenerPedidos {
  obtenerPedidos {
    id
    pedido {
      id
      cantidad
    }
    total
    cliente
    vendedor
    fecha
    estado
  }
}
`

const pedidos = () => {

  const { data, loading, error } = useQuery(OBTENER_PEDIDOS)
  const router = useRouter()

  if (loading) {
    return 'loading'
  }
  if (data.obtenerPedidos?.estado === undefined) {
    router.push('/login')
  }

  return (
    <div>
      <Layout>
        {
          loading ? <h1 className='text-2xl text-gray-800 font-light'>Cargando...</h1> :
            <>
              <h1 className='text-2xl text-gray-800 font-light'>Clientes </h1>
              <table className='table-auto shadow-md mt-10 w-full w-lg'>
                <thead className='bg-gray-800'>
                  <tr className='text-white'>
                    <th className='w-1/5 py-2'>ID</th>
                    <th className='w-1/5 py-2'>Total</th>
                    <th className='w-1/5 py-2'>Estado</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {/* i could've put a ? after ocv so if it returned a null this wouldnt break but i preffered to put it inside the laoding conditional to display a loader in the future */}
                  {data.obtenerPedidos?.map(pedido => (
                    <tr key={pedido.id}>
                      <td className='border w-1/5 py-2 px-4'>{pedido.id}</td>
                      <td className='border w-1/5 py-2 px-4'>{pedido.estado}</td>
                      <td className='border w-1/5 py-2 px-4'>{pedido.total}</td>
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

export default pedidos