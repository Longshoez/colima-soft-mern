const mongoose = require('mongoose')

const ProductoSchema = mongoose.Schema({
  pedido: {
    type: Array, required: true
  },
  total:{
    type: Number,
    required: true,
  },
  cliente:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Cliente' //referencia al documento Cliente (tabla clientes)
  },
  vendedor:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Usuario' //referencia al documento Usuario (tabla usuarios)
  },
  estado: {
    type: String,
    default: 'PENDIENTE'
  },
  creado: {
    type: Date, 
    default: Date.now() 
    //we use Date.now (moogoose) over Date.now() (js)  because mongoose will populate this field with the current date for the SCHEMA, if we were doing some js code, we would use the later one but we aint rn.
    //latest edit, the Date.now didnt worked, it set the date to null. so i replaced it with the other one and i think it works now.
   }

})

module.exports = mongoose.model('Pedido', ProductoSchema)