const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const parteSchema = new Schema({

	nombre:{
		type: String,
		required:true,
		index: {unique: true, dropDups: true}
	},
	tipo:{
		type: Boolean,
		required:true
    },
    stock:{
		type: int,
		required:true
	},
    id:{
		type: int,
		required:true
	}
})

const parte = mongoose.model('parte',parteSchema);
module.exports = parte;