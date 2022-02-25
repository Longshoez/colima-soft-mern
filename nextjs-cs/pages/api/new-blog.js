//here we can write server side code
//api/new-blog

import { MongoClient } from 'mongodb'

async function handler(req, res){

  if (req.method !== 'POST') return;
  const { image, title, description, details } = req.body
  const slug = title.toLowerCase()

  if (!image || !title || !description || !details) return;

  const client = await MongoClient.connect(
    "mongodb+srv://GabrielDB:0EaOxJLhinO2aBtj@cluster0.nommx.mongodb.net/next-js-crashcourse?retryWrites=true&w=majority"
  );

  const db = client.db();

  const postCollection = db.collection('posts')

  const result = await postCollection.insertOne({image, title, description, details, slug})

  client.close()

  res.status(201).json({
    post: result, 
    message: 'Post Created'
  })

}

export default handler


//"mongodb+srv://GabrielDB:xrfgv0yLBUFFOMTFs@cluster0.nommx.mongodb.net/nextJsTutorial?retryWrites=true&w=majority"

//0EaOxJLhinO2aBtj

//test image 
//https://images.unsplash.com/photo-1645790314935-ec2fe8b2a238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1424&q=80