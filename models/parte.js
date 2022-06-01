const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const parteSchema = new Schema({

	
	codigo:{
		type: int,
		required:true
	},
	descripcion:{
		type: String,
		required:true,
		index: {unique: true, dropDups: true}
	},
	
    cantpartesConsum:{
		type: int,
		required:true,
	
		},
	
	cantpartesDesper:{
		type: int,
		required:true,
	
		}
   
})

const parte = mongoose.model('parte',parteSchema);
module.exports = parte;