import mongoose from "mongoose"; 

const BlogSchema = new mongoose.Schema({
  //!image || !title || !description || !details
  image:{
    type: String,
    required: [true, 'ingresa algo']
  },
  title:{
    type: String,
    required: [true, 'ingresa algo']
  },
  description:{
    type: String,
    required: [true, 'ingresa algo']
  },
  details:{
    type: String,
    required: [true, 'ingresa algo']
  },
  
})

export default mongoose.models.Blog || mongoose.models('Blog', BlogSchema)