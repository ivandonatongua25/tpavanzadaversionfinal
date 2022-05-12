const Partes = []

require('mongoose');
const parte = require('../models/parte');

const addParte = async (nomnbre,tipo,stock,id) => {
    
    try{

        let existingparte = await parte.findOne({ email: id });

        if(existingparte){
            console.log("existe la parte");
            console.log(existingparte);

            return { existingparte }
        
        }else{

            
            const Parte = new parte(
                    {
                        
                        nomnbre: nomnbre,
                        tipo:tipo,
                        stock: stock,
                        id : id
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

const getParte = async (id) => {

    try{

        let Parte = await deposito.findOne({  id });

         return Parte;

    }catch (error) {

        console.log(error);
    }    

}

const deleteParte = async (id) => {
    
    await parte.deleteOne({ email: id }).then(function(){
    
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
