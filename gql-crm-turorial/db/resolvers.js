const Usuario = require('../models/Usuario')
const Producto = require('../models/Producto')
const Cliente = require('../models/Clientes')
const Pedido = require('../models/Pedidos')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '.env' })

//crear token
const crearToken = (usuario, secreta, expiresIn) => {
  console.log(usuario)
  const { id, email, nombre, apellido } = usuario
  return jwt.sign({ id, email, nombre, apellido }, secreta, { expiresIn })

}

//GraphQL 101
//1.- Crear modelo
//2.- Definir en Schema
//3.- Crear resolver

//Resolvers
const resolvers = {

  Query: {
    //como en el frontend tenemos el token en el context, ya no requerimos pasarle el token manualmente e incluso podemos dejar esta funcion mas sencilla.
    //de igual forma debemos modificar el schema para que acepte los nuevos cambios
    //obtenerUsuario: async (_, {token}) => {
    //   const usuarioId = await jwt.verify(token, process.env.SECRET_WORD)
    //   return usuarioId
    //},
    
    obtenerUsuario: async (_, {}, ctx) => {
      return ctx.usuario
    },

    obtenerProductos: async () => {
      try {
        const productos = await Producto.find({})
        return productos
      } catch (err) {
        console.log(err)
      }
    },

    obtenerProducto: async (_, { id }) => {
      //revisar si existe el producto
      const producto = await Producto.findById(id)

      if (!producto) {
        throw new Error('Product not found')
      }

      return producto

    },

    obtenerClientes: async () => {
      try {
        //documento
        const clientes = await Cliente.find({}) //objeto vacio se trae todas las ocurrencias por default
        return clientes
      } catch (error) {
        console.log(error)
      }
    },

    obtenerClientesVendedor: async (_, { }, ctx) => {
      try {
        //documento
        const clientes = await Cliente.find({ vendedor: ctx.usuario.id.toString() }) //objeto vacio se trae todas las ocurrencias por default
        return clientes
      } catch (error) {
        console.log(error)
      }
    },
    //requerimos el ctx (context) ahi porque nos dara acceso al usuario que esta autenticado
    obtenerCliente: async (_, { id }, ctx) => {
      //Check if exists
      const cliente = await Cliente.findById(id)

      if (!cliente) {
        throw new Error('Cliente no encontrado')
      }

      //validar si el que lo creo puede verlo
      if (cliente.vendedor.toString() !== ctx.usuario.id) {
        throw new Error('No tienes las credenciales')
      }

      return cliente
    },
    obtenerPedidos: async () => {
      try {
        const pedidos = await Pedido.find({})
        return pedidos
      } catch (error) {
        console.log(error)
      }
    },
    obtenerPedidosVendedor: async (_, { }, ctx) => {
      try {
        const pedidos = await Pedido.find({ vendedor: ctx.usuario.id })
        return pedidos
      } catch (error) {
        console.log(error)
      }
    },
    obtenerPedido: async (_, { id }, ctx) => {

      //pedido existe
      const pedido = await Pedido.findById(id)
      if (!pedido) {
        throw new Error('Pedido no encontrado')
      }
      //usuario autorizado para ver el pedido
      if (pedido.vendedor.toString() !== ctx.usuario.id) {
        throw new Error('No estas autorizado para ver este pedido')
      }

      //retornar pedido
      return pedido
    },
    obtenerPedidosEstado: async (_, { estado }, ctx) => {                    //al ser estos dos iguales se podria dejar escrito solo "estado", una sola vez, pero para ser explicitos a la hora de leer este codigo en el futuro lo dejare de esta forma
      const pedidos = await Pedido.find({ vendedor: ctx.usuario.id, estado: estado })
      return pedidos
    },
    mejoresClientes: async () => {
      const clientes = await Pedido.aggregate([
        //verificar que se hayan completado los pedidos
        { $match: { estado: 'COMPLETADO' } },
      ])
      console.log(clientes) // this returns a
      return clientes
    },
    // mejoresClientes: async () => {
    //   
    //   const clientes = await Pedido.aggregate([
    //     {$match: {estado: "COMPLETADO"}}, 
    //     { $group: {
    //       _id: "$cliente", 
    //       total: {$sum: '$total'}, //crea un campo total y hace una suma ($sum)
    //     }},
    //   ])
    //   console.log(clientes)
    //   return clientes
    // },

    mejoresVendedores: async () => {
      //las funciones tipo aggregate toman diferentes valores y los agrupan en un solo resultado, como un join en sql
      const vendedores = await Pedido.aggregate([
        //{ $match: { estado: "COMPLETADO" } }, //$match es como un WHERE en sql
        { $match: {} }, //$match es como un WHERE en sql
        {
          $group: {
            _id: "$vendedor", //nombre del modelo (se requiere que este en minusculas)
            total: { $sum: '$total' },//crea un campo total y hace una suma ($sum)
          }
        },
        // {
        //   $lookup: {
        //     from: 'usuarios',
        //     localField: '_id',
        //     foreignField: '_id',
        //     as: 'vendedor'
        //   }
        // },
        // {
        //   $sort: { total: -1 }
        // },
        // {
        //   $limit: 1
        // },
      ]);
      console.log(vendedores);
      return vendedores;
    },
    buscarProducto: async (_, { texto }) => {
      const productos = await Producto.find({ $text: { $search: texto } }).limit(20)
      return productos
    }
  },

  Mutation: {

    nuevoUsuario: async (_, { input }) => {
      const { email, password } = input

      //Check if user already exists      
      const existeUsuario = await Usuario.findOne({ email })
      if (existeUsuario) {
        throw new Error('Usuario ya existe')
      }
      //Hash the password
      const salt = await bcrypt.genSalt(10)
      input.password = await bcrypt.hash(password, salt)
      //Store it to DB
      try {
        const usuario = new Usuario(input)
        usuario.save()
        return usuario

      } catch (error) {
        console.log(error)
      }
    },

    autenticarUsuario: async (_, { input }) => {

      const { email, password } = input
      //usuario existe?      
      const existeUsuario = await Usuario.findOne({ email })
      if (!existeUsuario) {
        throw new Error('El usuario no existe')
      }
      //Revisar si la pass es correcta
      const passwordCorreto = await bcrypt.compare(password, existeUsuario.password)
      if (!passwordCorreto) {
        throw new Error('la pass es incorrecta')
      }
      //Crear el token
      return {
        token: crearToken(existeUsuario, process.env.SECRET_WORD, '12h')
      }

    },

    nuevoProducto: async (_, { input }) => {
      try {
        const nuevoProducto = new Producto(input)
        //Store into db
        const resultado = await nuevoProducto.save()
        return resultado
      } catch (err) {
        console.log(err)
      }
    },

    actualizarProducto: async (_, { id, input }) => {
      //check if product exists
      let producto = await Producto.findById(id) //let so we can modify its values

      if (!producto) {
        throw new Error('Producto no encontrado')
      }

      //guardar en la db
      producto = await Producto.findOneAndUpdate({ _id: id }, input, { new: true }) //sin el true, la funcion retornaria el objeto anterior, con esa ultima opcion, regresa el producto modificado
      return producto
    },

    eliminarProducto: async (_, { id }) => {
      //check if product exists
      let producto = await Producto.findById(id) //let so we can modify its values

      if (!producto) {
        throw new Error('Producto no encontrado')
      }

      //Eliminar                            //primero el {campo_del_documento: y_luego_la_variable}
      await Producto.findOneAndDelete({ _id: id }) //el tutor recomienda usar delete sobre remove, menciona que es mas recomendado
      //definir la string que se va retornar (el return que se especifico en el schema)
      return "Producto eliminado"
    },

    nuevoCliente: async (_, { input }, ctx) => {

      console.log(ctx)

      const { email } = input //destructuring input to get only the email

      //validar si el cliente ya existe
      //console.log(input)
      const cliente = await Cliente.findOne({ email })
      if (cliente) {
        throw new Error('El cliente ya ha sido registrado')
      }

      //Asignar el vendedor que lo registro
      const nuevoCliente = new Cliente(input)
      nuevoCliente.vendedor = ctx.usuario.id //asigna automaticamente el id correspondiente al usuario 


      //Guardar en la base de datos
      try {
        const resultado = await nuevoCliente.save()
        return resultado
      } catch (err) {
        console.log(err)
      }
    },

    actualizarCliente: async (_, { id, input }, ctx) => {
      let cliente = await Cliente.findById(id) //let porque despues de traernos el cliente necesitamos poder modificar sus datos

      //validar que exista el cliente
      if (!cliente) {
        throw new Error('no se encontro ningun cliente con ese id')
      }

      //validar que el usuario autorizado este editando y no cualquier otra persona
      if (cliente.vendedor.toString() !== ctx.usuario.id) {
        throw new Error('no tienes las credenciales adecuadas')
      }

      //guardar       Documento.funcionDeMongo      id a buscar,    datos nuevos,    return updated clietn
      cliente = await Cliente.findOneAndUpdate({ _id: id }, input, { new: true })
      return cliente
    },

    eliminarCliente: async (_, { id }, ctx) => {
      let cliente = await Cliente.findById(id) //let porque despues de traernos el cliente necesitamos poder modificar sus datos

      //validar que exista el cliente
      if (!cliente) {
        throw new Error('no se encontro ningun cliente con ese id')
      }

      //validar que el usuario autorizado este editando y no cualquier otra persona
      if (cliente.vendedor.toString() !== ctx.usuario.id) {
        throw new Error('no tienes las credenciales adecuadas')
      }

      //guardar       Documento.funcionDeMongo      id a buscar,    datos nuevos,    return updated clietn
      cliente = await Cliente.findOneAndDelete({ _id: id })
      return 'Cliente eliminado'
    },

    nuevoPedido: async (_, { input }, ctx) => {

      const { cliente } = input

      //validar si el cliente existe
      let clienteExists = await Cliente.findById(cliente)
      if (!clienteExists) {
        throw new Error('no se encontro ningun cliente con ese id')
      }

      //validar si el cliente es del vendedor
      if (clienteExists.vendedor.toString() !== ctx.usuario.id) {
        throw new Error('No tienes las credenciales')
      }

      //revisar que haya stock disponible
      console.log(input.pedido)

      //does using this {} witha comment inside break my code?
      {/*iterar si hay mas de un pedido -> but it aint the right aproach, porque necesitamos que sea asincrona la forma en la que recibe los articulos, si no fuera asincrona se iria a "asignar vendedor" y "guardar en la bd" de forma simultanea en la que esta recorriendo los pedidos
      input.pedido.forEach(async articulo => {
        const {id} = articulo
        const producto = await Producto.findById(id)
        console.log(producto)

        if (articulo.cantidad > producto.existencia) {
          throw new Error(`El articulo ${producto.nombre} excede la cantidad en stock`)
        }

      })
      console.log('despues del error')*/}

      //usamos for await (operador asincrono)
      for await (const articulo of input.pedido) {
        const { id } = articulo
        const producto = await Producto.findById(id)

        console.log(producto)

        if (articulo.cantidad > producto.existencia) {
          throw new Error(`El articulo ${producto.nombre} excede la cantidad en stock`)
        } else {
          //restar cantidad comprada en el producto
          producto.existencia = producto.existencia - articulo.cantidad
          await producto.save() //guarda los cambios en la bd
        }
      }
      console.log('no llega a este hasta que termina el bloque de codigo anterior')

      //crear nuevo pedido
      const nuevoPedido = new Pedido(input);

      //adignar al vendedor
      nuevoPedido.vendedor = ctx.usuario.id

      //guardar en db
      const res = await nuevoPedido.save()
      return res
    },

    actualizarPedido: async (_, { id, input }, ctx) => {

      //extraer datos del input 
      const { cliente } = input

      //validar si el pedido existe
      const existePedido = await Pedido.findById(id)
      if (!existePedido) {
        throw new Error('El pedido no existe')
      }
      //validar si el cliente existe 
      const existeCliente = await Cliente.findById(cliente)
      if (!cliente) {
        throw new Error('El cliente no existe')
      }

      //validar si el cliente y pedido pertenecen al vendedor
      if (existeCliente.vendedor.toString() != ctx.usuario.id) {
        throw new Error('No tienes las credenciales')
      }

      //revisar stock -> el if es para verificar si se requiere modificar el pedido, en caso de que no, y solo se quiera modificar la orden, entonces no etra al ciclo for y permite modificar solo la orden, de lo contrario al no pasarle un input, arrojaria error puesto a que estaria iterando en algo que no existe
      if (input.pedido) {
        for await (const articulo of input.pedido) {
          const { id } = articulo
          const producto = await Producto.findById(id)

          if (articulo.cantidad > producto.existencia) {
            throw new Error(`El articulo ${producto.nombre} excede la cantidad disponible`)
          } else {
            //guardar el pedido
            producto.existencia = producto.existencia - articulo.cantidad
            await producto.save()
          }
        }
      }

      const res = await Pedido.findOneAndUpdate({ _id: id }, input, { new: true })
      return res

    },

    eliminarPedido: async (_, { id }, ctx) => {

      //pedido existe
      const pedido = await Pedido.findById(id)
      if (!pedido) {
        throw new Error('El pedido no existe')
      }

      //Validar que el usuario este autorizado para eliminar pedido
      if (pedido.vendedor.toString() !== ctx.usuario.id) {
        throw new Error('No tienes las credenciales')
      }

      //eliminar de la bd
      await Pedido.findOneAndDelete({ _id: id })
      return "Pedido eliminado"
    }

  }
}

module.exports = resolvers
