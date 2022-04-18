
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

  type Cliente{
    id: ID
    nombre: String
    apellido: String
    empresa: String
    email: String  
    telefono: String  
    vendedor: ID
  }

  type Pedido {
    id: ID
    pedido: [PedidoGrupo] #creo que se hace un arreglo de esto para tener una especie de arreglo de arreglos?
    total: Float
    cliente: ID
    vendedor: ID
    fecha: String
    estado: EstadoPedido
  }

  type PedidoGrupo {
    id: ID
    cantidad: Int
  }

  type TopCliente{
    total: Float
    ciente: [Cliente]
  }
  
  type TopVendedor{
    total: Float
    vendedor: [Usuario]
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

  input PedidoInput {
    pedido: [PedidoProductoInput]
    total: Float
    cliente: ID
    #vendedor: -> no lo agregamos porque utilizando el estado se agregara automaticamente
    estado: EstadoPedido
  }

  enum EstadoPedido{
    PENDIENTE
    COMPLETADO
    CANCELADO
  }

  input PedidoProductoInput {
    id: ID
    cantidad: Int
  }

#this is a model
  input ClienteInput{
    nombre: String!
    apellido: String!
    empresa: String!
    email: String!
    telefono: String
    #no pasamos "vendedor aqui" porque se pasara desde ctx (context)
  }

  type Query{
    #Usuarios
    obtenerUsuario(token: String!): Usuario

    #Productos
    obtenerProductos: [Producto] # READ -> 
    obtenerProducto(id: ID!) : Producto #si solo requerimos de un valor para hacer la query podemos declararlo ahi mismo como un parametro, con su tipo de dato obviamente

    #Clientes
    obtenerClientes: [Cliente]
    obtenerClientesVendedor: [Cliente]
    obtenerCliente(id: ID!) : Cliente

    #Pedidos
    obtenerPedidos: [Pedido]
    obtenerPedidosVendedor: [Pedido]
    obtenerPedido(id: ID!): Pedido
    obtenerPedidosEstado(estado: String!):[Pedido]

    #Busquedas avanzadas
    mejoresClientes:[TopCliente]
    mejoresVendedores:[TopVendedor]

  }

  type Mutation{
    # Usuarios
    nuevoUsuario(input: UsuarioInput): Usuario #lo que esta despues de los : representa lo que devolvera el mutation
    autenticarUsuario(input: AutenticarInput): Token

    # Productos
    nuevoProducto(input: ProductoInput): Producto # CREATE -> ProductoInput representa los campos que se le mandaran al mutation.
    actualizarProducto(id: ID!, input: ProductoInput): Producto #UPDATE -> 
    eliminarProducto(id: ID!) : String

    #Clientes
    nuevoCliente(input: ClienteInput): Cliente
    actualizarCliente(id: ID!, input: ClienteInput): Cliente
    eliminarCliente(id: ID!) : String

    #Pedidos
    nuevoPedido(input: PedidoInput) : Pedido
    actualizarPedido(id: ID!, input: PedidoInput): Pedido
    eliminarPedido(id: ID!): String

  }
`
module.exports = typeDefs