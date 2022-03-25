const { gql } = require("apollo-server-express")

//here you define the sort of methods youll use and also the type of data

//we can also define the PostInput properties inside the createPost parameter but it looks cluttered so we declare it in a separate object?

//Queries

const typeDefs=gql`

  type Post{
    id:ID
    title: String
    description: String
  }

  type Query{
    hello: String
    getAll: [Post]
  }

  input PostInput{
    title: String
    description: String
  }

  type Mutation{
    createPost(post:PostInput): Post
    updatePost(id:String, post:PostInput):Post
    deletePost(id:String):String
  }
`
//the las :Post represents what the query will return
module.exports = typeDefs