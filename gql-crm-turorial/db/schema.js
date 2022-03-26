const { gql } = require('apollo-server')

//Siempre que creamos una funcion o mutation hay que crear su respectivo resolver

//Schema -> (this is graphql syntax)
const typeDefs = gql`

  #Types

  type Usuario{
    id: ID
    nombre: String
    apellido: String
    email: String    
    creado: String
  }

  type Producto{
    id: ID
    nombre: String
    existencia: Int
    precio: Float  
    creado: String    
  }

  type Token {
    token :String
  }

  #Other Types

  input UsuarioInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  input AutenticarInput {
    email: String!
    password: String!
  }

  input ProductoInput {
    nombre: String!        
    existencia: Int! #En mongo no existe el tipo Int, pero si el Number. aqui en graph, si tenemos Int a nuestra disposicion
    precio: Float! #La razon por la que en el resolver este dato se puso como Number es la misma que el comentario de arriba    
  }

  type Query{
    #Usuarios
    obtenerUsuario(token: String!): Usuario

    #Productos
    obtenerProductos: [Producto]

    obtenerProducto(id: ID!) : Producto #si solo requerimos de un valor para hacer la query podemos declararlo ahi mismo como un parametro, con su tipo de dato obviamente

  }

  type Mutation{
    # Usuarios
    nuevoUsuario(input: UsuarioInput): Usuario #lo que esta despues de los : representa lo que devolvera el mutation
    autenticarUsuario(input: AutenticarInput): Token

    # Productos
    nuevoProducto(input: ProductoInput): Producto # ProductoInput representa los campos que se le mandaran al mutation.
  }
`
module.exports = typeDefs