import conectarDB from "../../lib/dbConnect";
import BlogSchema from "../../models/BlogSchema";

export default async function handler(req, res){

  await conectarDB()

  //POST
  const {method} = req

  switch (method) {
    case 'POST':
      try {
        const blog_post = new Blog(req.body)
        await blog_post.save()
        return res.status(200).json({success: true, blog_post})
      } catch (e) {
        return res.status(400).json({success: false, error: 'server error :O'})
      }
    default:
      return res.status(500).json({success: false, error: 'server error :O'})
  }

}