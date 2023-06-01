import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
//instead of using HttpLink we use createHttpLink from the apollo-link-context library we installed for sending custom headers
import { setContext } from 'apollo-link-context'

//le decimos a donde conectarse
const HttpLink = createHttpLink({
  uri: 'http://localhost:4000',
})

//agregamos el header nuevo (...headers anteriores + nuevo header)
const authLink = setContext((_, { headers }) => {

  //leer storage almacenado
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '' //bearer is convention
    }
  }
})

//hacemos coneccio con apollo client
const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(HttpLink)
})

export default client