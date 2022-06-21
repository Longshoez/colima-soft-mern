const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')
const connectarDB = require('./config/db')
const jwt = require('jsonwebtoken')

//conectar a la db
connectarDB()

//Server
const server = new ApolloServer({
  typeDefs, 
  resolvers,
  context: ({req}) => { //this is sorta redux without redux, it makes some data available on all the resolvers
    //console.log(req.headers['authorization'])

    console.log(req.headers)
    const token = req.headers['authorization'] || ''
    if (token) {
      try {
        const usuario = jwt.verify(token.replace('Bearer ', ''), process.env.SECRET_WORD)
        //console.log('ctx ',usuario)
	console.log(usuario)
        //we return this so we can access it on the resolvers
        return{
          usuario
        }
      } catch (err) {
        console.log('Something went wrong')
        console.log(err)        
      }
    }
  }
})

//Run Server
server.listen().then(({url}) => {
  console.log(`Server running on ${url}`)
})
