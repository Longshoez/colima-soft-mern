import { useFormik } from 'formik' //control de schema y formulario
import * as Yup from 'yup' //validaciones
import { useState } from 'react'
import Layout from '../components/Layout'
import { useQuery, useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const NUEVA_CUENTA = gql`
  mutation nuevoUsuario($input: UsuarioInput) {
    nuevoUsuario(input: $input) {
      id
      nombre
      apellido
      email
      creado
    }
  }
`

const signup = () => {

  //obtener productos de gql
  //const { data, loading, error } = useQuery(NUEVA_CUENTA) //gql queries give us 3 values, data, loading and error

  //mensaje de error
  const [mensaje, setMensaje] = useState(null)

  //crear nuevos usuarios
  const [nuevoUsuario] = useMutation(NUEVA_CUENTA) //cuando usamos mutations en lugar de usar corchetes, usamos llaves, y aplicamos array destructuring y retorna la funcion del mutation

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
      nombre: '',
      apellido: '',
      password: '',
    },
    validationSchema: Yup.object({ //yup validates before trying to submit the form data
      email: Yup.string().required('email must not be empty'),
      nombre: Yup.string().required('Name must not be empty'),
      apellido: Yup.string().required('Apellido must not be empty'),
      password: Yup.string().required('Password must not be empty').min(6, "Password mus contain more than 6 characters"),
    }),
    onSubmit: async valores => {
      console.log('enviando')
      //console.log(valores)
      const { email, nombre, apellido, password } = valores

      try {
        const { data } = await nuevoUsuario({ //aqui tambien tenemos acceso a data como en los queries
          variables: {
            input: {
              email, //email:email -> la forma normal. pero como se llaman igual podemos solo declarar el nombre una sola vez
              nombre,
              apellido,
              password
            }
          }
        })
        //usuario creado correctamente
        console.log(data)
        setMensaje(`Usuario ${data.nuevoUsuario.nombre} creado con exito`)
        setTimeout(() => {
          router.push('/login')
        }, 2000);
      } catch (err) {
        console.log(err.message)
        setMensaje(err.message)
        setTimeout(() => {
          setMensaje(null)
        }, 3000);
      }
    }

  })

  return (
    <Layout>
      <h1 className='text-center text-2xl text-white font-light'>Sign up</h1>
      <div className='flex justify-center mt-5'>
        <div className='w-full max-w-sm'>
          <form onSubmit={formik.handleSubmit} className='bg-white rounded shadow-md5 px-8 pt-4 pb-4 mb-4'>

            {mensaje !== null ? <div className='my-1 bg-red-100 border-l-4 border-green-500 text-red-700 p-2'><p>{mensaje}</p></div> : null}

            {formik.touched.email && formik.errors.email ? <div className='my-1 bg-red-100 border-l-4 border-red-500 text-red-700 p-2'><p>{formik.errors.email}</p></div> : null}
            <div className='mb-4 mt-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
              <input className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="email"
                type="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.nombre && formik.errors.nombre ? <div className='my-1 bg-red-100 border-l-4 border-red-500 text-red-700 p-2'><p>{formik.errors.nombre}</p></div> : null}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="nombre">Nombre</label>
              <input className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre" type="text" placeholder="Nombre" value={formik.values.nombre} onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            </div>

            {formik.touched.apellido && formik.errors.apellido ? <div className='my-1 bg-red-100 border-l-4 border-red-500 text-red-700 p-2'><p>{formik.errors.apellido}</p></div> : null}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="apellido">Apellido</label>
              <input className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="apellido" type="text" placeholder="Apellido" value={formik.values.apellido} onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            </div>

            {formik.touched.password && formik.errors.password ? <div className='my-1 bg-red-100 border-l-4 border-red-500 text-red-700 p-2'><p>{formik.errors.password}</p></div> : null}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
              <input className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            </div>
            <input type="submit" value="Sign up" className='bg-gray-700 w-full mt-5 p-2 text-white uppercase rounded hover:bg-gray-800' />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default signup