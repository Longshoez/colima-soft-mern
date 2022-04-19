import React from 'react'

const Cliente = ({ cliente }) => {

  const { nombre, apellido, empresa, email, id } = cliente
  const eliminarCliente = (id) => {
    console.log('eliminar ', id)
  }

  return (
    <tr key={id}>
      <td className='border w-1/5 py-2 px-4'>{nombre} {apellido}</td>
      <td className='border w-1/5 py-2 px-4'>{empresa}</td>
      <td className='border w-1/5 py-2 px-4'>{email}</td>
      <td className='w-1/5 py-2'><button type='button' onClick={() => eliminarCliente(id)} className='flex justify-center items-center bg-red-500 text-white rounded p-1 mx-2 hover:bg-red-300'><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></td>
      {/* <td className='w-1/5 py-2'><button type='button' className='flex justify-center items-center'>*/}
    </tr>
  )
}

export default Cliente