const depositos = []

// id es socket.id y userId se refiere al id que tiene en Juntos
require('mongoose');
const deposito = require('../models/deposito');

const addDeposito = async (nomnbre,ubicacion,email,telefono) => {
    
    try{

        let existingdeposito = await deposito.findOne({ email: email });

        if(existindeposito){
            console.log("existe el deposito");
            console.log(existingdeposito);

            return { existingdeposito }
        
        }else{

            
            const Deposito = new deposito(
                    {
                        
                        nomnbre: nomnbre,
                        ubicacion:ubicacion,
                        email: email,
                        telefono : telefono
                    }
                );

                let depositonuevo = await Deposito.save() 
                console.log("Deposito nuevo");
                console.logal(depositonuevo);
                return { depositonuevo };        

        } 

    }catch (error) {

        return { error }
    }    
}

const getDeposito = async (email) => {

    try{

        let Deposito = await deposito.findOne({ email: email });

         return Deposito;

    }catch (error) {

        console.log(error);
    }    

}

const deleteDeposito = async (email) => {
    
    await deposito.deleteOne({ email: email }).then(function(){
    
        console.log("Deposito deleted"); // Success
    
    }).catch(function(error){
    
        console.log(error); // Failure
    
    });
}


const getDepositos = async () => {

    try{
        
        let Depositos = await deposito.find({})
        return Depositos;
    
    }catch (error) {

        console.log(error);
    }  
}



//const getUsers = (room) => users.filter(user => user.room === room)


module.exports = { addDeposito, getDeposito, deleteDeposito, getDepositos }
