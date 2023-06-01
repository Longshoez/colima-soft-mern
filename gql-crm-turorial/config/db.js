const mongoose = require('mongoose')
require('dotenv').config({path: './env'})

const connectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO,{
      //this things prevent some random warnings (not showing up on my end, but the tutorial guy suggested it)
      useUnifiedTopology: true,      
      useNewUrlParser: true,
    })
    console.log('Connection to db succesful')
  } catch (error) {
    console.log('something went wrong')
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectarDB