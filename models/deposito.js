const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const depositoSchema = new Schema({

	nombre:{
		type: String,
		required:true,
		index: {unique: true, dropDups: true}
	},
	ubicacion:{
		type: String,
		required:true
    },
    email:{
		type: String,
		required:true
	},
    telefono:{
		type: int,
		required:true
	}
})

const deposito = mongoose.model('deposito',depositoSchema);
module.exports = deposito;