const Partes = []

require('mongoose');
const parte = require('../models/parte');

const addParte = async (codigo,descripcion,cantpartesConsum,cantpartesDesper) => {
    
    try{

        let existingparte = await parte.findOne({ codigo: codigo });

        if(existingparte){
            console.log("existe la parte");
            console.log(existingparte);

            return { existingparte }
        
        }else{

            
            const Parte = new parte(
                    {
                        
                        codigo : codigo,
                        descripcion:descripcion,
                        cantpartesConsum: cantpartesConsum,
                        cantpartesDesper: cantpartesDesper
                    }
                );

                let partenueva = await Parte.save() 
                console.log("Parte nueva");
                console.logal(partenueva);
                return { partenueva };        

        } 

    }catch (error) {

        return { error }
    }    
}

const getParte = async (codigo) => {

    try{

        let Parte = await deposito.findOne({  codigo });

         return Parte;

    }catch (error) {

        console.log(error);
    }    

}

const deleteParte = async (codigo) => {
    
    await parte.deleteOne({ codigo: codigo }).then(function(){
    
        console.log("Parte deleted"); // Success
    
    }).catch(function(error){
    
        console.log(error); // Failure
    
    });
}


const getPartes = async () => {

    try{
        
        let Partes = await deposito.find({})
        return Partes;
    
    }catch (error) {

        console.log(error);
    }  
}





module.exports = { addParte, getParte, deleteParte, getPartes }
