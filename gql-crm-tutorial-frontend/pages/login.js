import { useFormik } from 'formik' //control de schema y formulario
import * as Yup from 'yup' //validaciones
import React from 'react'
import Layout from '../components/Layout'
import { useState } from 'react/cjs/react.development'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const AUTHENTICAR_USUARIO = gql`
  mutation AutenticarUsuario($input: AutenticarInput) {
    autenticarUsuario(input: $input) {
      token
    }
  }
`

const login = () => {

  //authenticar usuarios
  const [AuthenticarUsuario] = useMutation(AUTHENTICAR_USUARIO)
  const [mensaje, setMensaje] = useState(null)
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({ //yup validates before trying to submit the form data
      email: Yup.string().required('email must not be empty'),
      password: Yup.string().required('Password must not be empty'),
    }),
    onSubmit: async valores => {
      console.log('enviando')
      const { email, password } = valores
      try {
        const { data } = await AuthenticarUsuario({
          variables: {
            input: {
              email,
              password
            }
          }
        })
        //mostrar resultado en consola e indicar a usuario inicio exitoso
        console.log(data)
        setMensaje('Authenticacion exitosa')

        //extraer token de la respuesta de la query de graphql y guardar en el localstorage
        const { token } = data.autenticarUsuario
        localStorage.setItem('token', token)

        //ocultar mensaje
        setTimeout(() => {
          setMensaje(null)
          //redireccionar al crm
          router.push('./')
        }, 2000);

      } catch (err) {
        console.log(err)
        setMensaje('Las credenciales no son correctas')
        setTimeout(() => {
          setMensaje(null)
        }, 2000);
      }
    }

  })

  return (
    <Layout>
      <h1 className='text-center text-2xl text-white font-light'>Login</h1>
      <div className='flex justify-center mt-5'>
        <div className='w-full max-w-sm'>
          <form onSubmit={formik.handleSubmit} className='bg-white rounded shadow-md5 px-8 pt-4 pb-4 mb-4'>

            {mensaje !== null ? <div className='my-1 bg-red-100 border-l-4 border-green-500 text-red-700 p-2'><p>{mensaje}</p></div> : null}
            {formik.touched.email && formik.errors.email ? <div className='my-1 bg-red-100 border-l-4 border-red-500 text-red-700 p-2'><p>{formik.errors.email}</p></div> : null}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
              <input className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline'
                id="email" type="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>

            {formik.touched.password && formik.errors.password ? <div className='my-1 bg-red-100 border-l-4 border-red-500 text-red-700 p-2'><p>{formik.errors.password}</p></div> : null}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
              <input className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline'
                id="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
            <input type="submit" value="Iniciar sesion" className='bg-gray-700 w-full mt-5 p-2 text-white uppercase rounded hover:bg-gray-800' />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default login