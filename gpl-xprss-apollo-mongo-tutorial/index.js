const express=require('express')
const {ApolloServer}=require('apollo-server-express')
const mongoose=require('mongoose')
require('dotenv').config

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const URL='mongodb+srv://tetst1:T3kgbLOUTvGIPofW@cluster0.nommx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
},() => console.log("DB CONNECTED"))

const startServer = async ()=>{
  const app = express()
  const apolloServer = new ApolloServer({
    typeDefs, resolvers
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({app:app})
  app.listen(4000, ()=> console.log('server running on port: 4000'))
}

startServer()