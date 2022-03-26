const Usuario = require('../models/Usuario')
const Producto = require('../models/Producto')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '.env'})

//crear token
const crearToken = (usuario, secreta, expiresIn) => {
  console.log(usuario)
  const {id, email, nombre, apellido} = usuario
  return jwt.sign({id, email, nombre, apellido}, secreta, {expiresIn})

}

//Resolvers
const resolvers = {

  Query: {
    obtenerUsuario: async (_, {token}) => {
      const usuarioId = await jwt.verify(token, process.env.SECRET_WORD)
      return usuarioId
    },  
    
    obtenerProductos: async () => {
      try {
        const productos = await Producto.find({})
        return productos
      } catch (err) {
        console.log(err)
      }
    },

    obtenerProducto: async (_, {id}) => {
      //revisar si existe el producto
      const producto = await Producto.findById(id)

      if (!producto) {
        throw new Error('Product not found')
      }

      return producto

    }
  },

  Mutation: {

    nuevoUsuario: async(_, {input}) => {
      const {email, password} = input

      //Check if user already exists      
      const existeUsuario = await Usuario.findOne({email})
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

    autenticarUsuario: async (_, {input}) => {

      const {email, password} = input      
      //usuario existe?      
      const existeUsuario = await Usuario.findOne({email})
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

    nuevoProducto: async(_, {input}) => {
      try {
        const nuevoProducto = new Producto(input)
        //Store into db
        const resultado = await nuevoProducto.save()
        return resultado
      } catch (err) {
        console.log(err)
      }
    }


  }
}

module.exports = resolvers