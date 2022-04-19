import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import Layout from '../components/Layout'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'

//1.- definir el query o mutation que usaremos con los campos que necesitamod
const NUEVO_CLIENTE = gql`
  mutation NuevoCliente($input: ClienteInput) {
    nuevoCliente(input: $input) {
      id
      nombre
      apellido
      empresa
      email
      telefono
      vendedor
    }
  }
`
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


const nuevoCliente = () => {

  const route = useRouter()

  //send new user to cache, asi nos evitamos hacer una consulta cada que regresamos a /clientes
  const [nuevoCliente] = useMutation(NUEVO_CLIENTE, {
    update(cache, { data: { nuevoCliente } }) {
      //obtener el objeto de cache a actualizar
      const { obtenerClientesVendedor } = cache.readQuery({ query: OBTENER_CLIENTES_VENDEDOR })

      //como un state de react, el cache es inmutable, no se debe modificar directamente, hay que re-escribirlo
      cache.writeQuery({
        query: OBTENER_CLIENTES_VENDEDOR,
        data: {
          obtenerClientesVendedor: [...obtenerClientesVendedor, nuevoCliente] //data previa + nueva informacion
        }
      })

    }
  })
  const [mensaje, setMensaje] = useState(null)

  //2.- definir el schema que usara formik, la validacion y el submit
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      empresa: '',
      email: '',
      telefono: '',
    },
    validationSchema: yup.object({
      nombre: yup.string().required('El campo no debe estar vacio'),
      apellido: yup.string().required('El campo no debe estar vacio'),
      empresa: yup.string().required('El campo no debe estar vacio'),
      email: yup.string().required('El campo no debe estar vacio'),
      //when a field is optional you dont need to declare it here, the phone field for example
    }), //3.- enviar la data a mongo
    onSubmit: async valores => {
      console.log('enviando')
      const { nombre, apellido, empresa, email, telefono } = valores
      try {
        const { data } = await nuevoCliente({
          variables: {
            input: {
              nombre,
              apellido,
              empresa,
              email,
              telefono,
            }
          }
        })
        console.log(data)
        setMensaje('Nuevo usuario registrado')
        setTimeout(() => {
          setMensaje(null)
          route.push('/')
          //apollo wont update the state from /clients as soon as we enter it, we have to update the apollo cache 
        }, 2000);
      } catch (err) {
        console.log(err)
        setMensaje(err.message)
        setTimeout(() => {
          setMensaje(null)
        }, 3000);
      }
    }

  })

  return (
    <Layout>
      <h1 className='text-2xl text-gray-800 font-light'>Nuevo cliente</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form onSubmit={formik.handleSubmit} className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              {mensaje !== null ? <div className='my-1 bg-red-100 border-l-4 border-green-500 text-red-700 p-2'><p>{mensaje}</p></div> : null}
              <label htmlFor="nombre" className='block text-gray-700 text-sm font-bold mb-2'>Nombre</label>

              {formik.touched.nombre && formik.errors.nombre ? <div className='my-1 bg-red-100 border-l-4 border-red-500 text-red-700 p-2'><p>{formik.errors.nombre}</p></div> : null}
              <input className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline'
                id="nombre"
                type="text"
                placeholder="nombre cliente"
                autoComplete='off'
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.apellido && formik.errors.apellido ? <div className='my-1 bg-red-100 border-l-4 border-red-500 text-red-700 p-2'><p>{formik.errors.apellido}</p></div> : null}
            <div className="mb-4">
              <label htmlFor="apellido" className='block text-gray-700 text-sm font-bold mb-2'>Apellido</label>
              <input className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline'
                id="apellido"
                type="text"
                placeholder="Apellido"
                autoComplete='off'
                value={formik.values.apellido}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.empresa && formik.errors.empresa ? <div className='my-1 bg-red-100 border-l-4 border-red-500 text-red-700 p-2'><p>{formik.errors.empresa}</p></div> : null}
            <div className="mb-4">
              <label htmlFor="empresa" className='block text-gray-700 text-sm font-bold mb-2'>Empresa</label>
              <input className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline'
                id="empresa"
                type="text"
                placeholder="Empresa"
                autoComplete='off'
                value={formik.values.empresa}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.email && formik.errors.email ? <div className='my-1 bg-red-100 border-l-4 border-red-500 text-red-700 p-2'><p>{formik.errors.email}</p></div> : null}
            <div className="mb-4">
              <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
              <input className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline'
                id="email"
                type="text"
                placeholder="Email"
                autoComplete='off'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="telefono" className='block text-gray-700 text-sm font-bold mb-2'>Telefono</label>
              <input className='telefono apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline'
                id="telefono"
                type="text"
                placeholder="Telefono"
                autoComplete='off'
                value={formik.values.telefono}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <input type="submit" value="Registrar cliente" className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default nuevoCliente