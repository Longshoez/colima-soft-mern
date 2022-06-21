import Head from 'next/head'
import Layout from '../components/Layout'
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react/cjs/react.production.min'
import Link from 'next/link'
import Cliente from '../components/Cliente'

const OBTENER_CLIENTES_VENDEDOR = gql`
  query ObtenerClientesVendedor {
    obtenerClientesVendedor {
      id
      nombre
      apellido
      empresa
      email
      telefono
    }
  }
`

export default function Home() {

  const router = useRouter()

  //consulta de apollo
  const { data, loading, error } = useQuery(OBTENER_CLIENTES_VENDEDOR)

  if (loading) {
    return 'loading'
  }
  console.log(data)
  // if (data === undefined) {
  //   console.log('the data', data)
  //   router.push('/login')
  // }

  return (
    <div>
      <Layout>
        {
          loading ? <h1 className='text-2xl text-gray-800 font-light'>Cargando...</h1> :
            <>
              <h1 className='text-2xl text-gray-800 font-light'>Clientes </h1>
              <Link href='/nuevoCliente'><a href="" className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold">Nuevo Cliente</a></Link>
              <table className='table-auto shadow-md mt-10 w-full w-lg'>
                <thead className='bg-gray-800'>
                  <tr className='text-white'>
                    <th className='w-1/5 py-2'>Nombre</th>
                    <th className='w-1/5 py-2'>Empresa</th>
                    <th className='w-1/5 py-2'>Email</th>
                    <th className='w-1/5 py-2'>Operaciones</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {/* i could've put a ? after ocv so if it returned a null this wouldnt break but i preffered to put it inside the laoding conditional to display a loader in the future */}
                  {data.obtenerClientesVendedor?.map(cliente => (
                    <Cliente cliente={cliente} key={cliente.id} />
                  ))}
                </tbody>
              </table>
            </>
        }
      </Layout>
    </div>
  )
}
