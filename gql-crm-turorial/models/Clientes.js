const mongoose = require('mongoose')

const ClientesSchema = mongoose.Schema({
  nombre:{ type: String, required: true, trim: true },
  apellido:{ type: String, required: true, trim: true },
  empresa:{ type: String, required: true, trim: true },
  email:{ type: String, required: true, trim: true, unique: true},
  telefono:{ type: String, trim: true },
  creado:{ type: Date, default: Date.now() },
  vendedor:{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Usuario'} //ref le da la referencia del usuario en la tabla de usuarios i guess? 
})

module.exports = mongoose.model('Cliente', ClientesSchema)