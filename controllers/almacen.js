const almacenes = []

require('mongoose');
const almacen = require('../models/almacen');

const addAlmacen = async (nomnbre,ubicacion,email,telefono) => {
    
    try{

        let existingalmacen = await almacen.findOne({ email: email });

        if(existingalmacen){
            console.log("existe el almacen");
            console.log(existingalmacen);

            return { existingalmacen }
        
        }else{

            
            const Almacen = new almacen(
                    {
                        
                        nomnbre: nomnbre,
                        ubicacion:ubicacion,
                        email: email,
                        telefono : telefono
                    }
                );

                let almacennuevo = await Almacen.save() 
                console.log("almacen nuevo");
                console.logal(almacennuevo);
                return { almacennuevo };        

        } 

    }catch (error) {

        return { error }
    }    
}

const getAlmacen = async (email) => {

    try{

        let Almacen = await almacen.findOne({ email: email });

         return Almacen;

    }catch (error) {

        console.log(error);
    }    

}

const deleteAlmacen = async (email) => {
    
    await almacen.deleteOne({ email: email }).then(function(){
    
        console.log("Almacen deleted"); // Success
    
    }).catch(function(error){
    
        console.log(error); // Failure
    
    });
}


const getAlmacenes = async () => {

    try{
        
        let Almacenes = await almacen.find({})
        return Almacenes;
    
    }catch (error) {

        console.log(error);
    }  
}





module.exports = { addAlmacen, getAlmacen, deleteAlmacen, getAlmacenes }
