//here we can write server side code
//api/new-blog

import {MongoClient} from 'mongodb'

async function handler(req, res){
  //req.method, req.body
  if (req.method !== "POST") return //exits the block of code if conditions aren't met

  const { image, title, description, details} = req.body
  const slug = title.replace(" ","-").toLowerCase()

  if (!image || !title || !description || !details) return //exits the block of code if conditions aren't met

  const client = await MongoClient.connect(
    "mongodb+srv://GabrielDB:xrfgv0yLBUFFOMTFs@cluster0.nommx.mongodb.net/nextJsTutorial?retryWrites=true&w=majority"
  )
  
  const db = client.db()
  const postCollection = db.collection("posts")
  const result = await postCollection.insertOne({image, title, description, details, slug}) //inserts one document into collection
  client.close()

  res.status(201).json({
    post: result,
    message: 'Post Created'
  })
}

export default handler


//"mongodb+srv://GabrielDB:xrfgv0yLBUFFOMTFs@cluster0.nommx.mongodb.net/nextJsTutorial?retryWrites=true&w=majority"