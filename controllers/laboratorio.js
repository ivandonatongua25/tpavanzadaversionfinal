const laboratorios = []

require('mongoose');
const laboratorio =require('../models/laboratorio');

const addLaboratorio = async (nomnbre,ubicacion,email,telefono) => {
    
    try{

        let existinglaboratorio = await laboratorio.findOne({ email: email });

        if(existinglaboratorio){
            console.log("existe el laboratorio");
            console.log(existinglaboratorio);

            return { existinglaboratorio }
        
        }else{

            
            const Laboratorio = new laboratorio(
                    {
                        
                        nomnbre: nomnbre,
                        ubicacion:ubicacion,
                        email: email,
                        telefono : telefono
                    }
                );

                let laboratorionuevo = await Laboratorio.save() 
                console.log("Laboratorio nuevo");
                console.logal(laboratorionuevo);
                return { laboratorionuevo };        

        } 

    }catch (error) {

        return { error }
    }    
}

const getLaboratorio = async (email) => {

    try{

        let Laboratorio = await laboratorio.findOne({ email: email });

         return Laboratorio;

    }catch (error) {

        console.log(error);
    }    

}

const deleteLaboratorio = async (email) => {
    
    await laboratorio.deleteOne({ email: email }).then(function(){
    
        console.log("Laboratorio deleted"); // Success
    
    }).catch(function(error){
    
        console.log(error); // Failure
    
    });
}


const getLaboratorios = async () => {

    try{
        
        let Laboratorios = await laboratorio.find({})
        return Laboratorios;
    
    }catch (error) {

        console.log(error);
    }  
}





module.exports = { addLaboratorio, getLaboratorio, deleteLaboratorio, getLaboratorios }
