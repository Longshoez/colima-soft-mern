const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')

//Server
const server = new ApolloServer({
  typeDefs, 
  resolvers,
  context: () => {
    const mensaje = "Soy el mensaje que se trigerea cada que se ejecuta la query"
    return {mensaje}
  }
})

//Run Server
server.listen().then(({url}) => {
  console.log(`Server running on ${url}`)
})