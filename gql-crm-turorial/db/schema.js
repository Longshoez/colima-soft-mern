const { gql } = require('apollo-server')

//Schema -> (this is graphql syntax)
const typeDefs = gql`

  type Curso{
    titulo: String
  }

  type Tecnologia{    
    tecnologia: String
  }

  input CursoInput{
    tecnologia: String
  }

  type Query{
    obtenerCursos(input: CursoInput!): [Curso]
    obtenerTecnologia: [Curso]
  }
`
//signo de exclamacion hace el valor de input estrictamente requerido 

module.exports = typeDefs