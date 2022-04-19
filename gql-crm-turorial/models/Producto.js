const mongoose = require('mongoose')

const ProductoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },

  existencia: {
    type: Number,
    required: true,
    trim: true
  },

  precio: {
    type: Number,
    required: true,
    trim: true
  },

  creado: {
    type: Date,
    default: Date.now()
  }

})
//an index we can consult when searching for a product by name
ProductoSchema.index({
  nombre: 'text'
})

module.exports = mongoose.model('Producto', ProductoSchema)