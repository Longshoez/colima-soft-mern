const mongoose = require('mongoose')

const UsuariosSchema = mongoose.Schema({
  nombre:{
    type: String,
    required: true,
    trim: true //removes white spaces
  },
  apellido:{
    type: String,
    required: true,
    trim: true
  },
  email:{
    type: String,
    required: true,
    trim: true,
    unique: true //prevents duplicated entries
  },
  password:{
    type: String,
    required: true,
    trim: true
  },
  creado:{
    type: Date,
    default: Date.now    
  }
})

module.exports = mongoose.model('Usuario', UsuariosSchema)