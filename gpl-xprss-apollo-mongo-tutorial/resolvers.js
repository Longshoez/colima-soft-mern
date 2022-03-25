const Post = require('./Post')

//Mutation type of actions cant go inside the query because they are their own type of thing 

//Resolvers
const resolvers ={
  Query:{
    hello:() => {
      return 'hello worl'
    },
    getAll:async () =>{
      return await Post.find()
    },    
  },
  Mutation:{
    createPost: async (parent, args, context, info) => {
      const {title, description } = args.post
      const post = await new Post({title, description}).save()
      return post
    },

    updatePost: async (parent, args, context, info) => {
      const { id } = args
      const {title, description } = args.post
      const post = await Post.findByIdAndUpdate(id, {title, description}, {new:true})
      return post
    },

    deletePost: async (parent, args, context, info) => {
      const {id} = args
      await Post.findByIdAndDelete(id)
      return 'Deleted'
    }

  }

}

module.exports = resolvers