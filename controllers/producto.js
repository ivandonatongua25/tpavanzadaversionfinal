const productos = []

require('mongoose');
const producto= require('../models/producto');

const addProducto = async (nombre,descripcion,stock,codigo) => {
    
    try{

        let existingproducto = await producto.findOne({nombre : nombre });

        if(existingproducto){
            console.log("existe el producto");
            console.log(existingproducto);

            return { existingproducto }
        
        }else{

            
            const Producto = new producto(
                    {
                        
                        nombre: nombre,
                        descripcion:descripcion,
                        stock: stock,
                        codigo : codigo
                    }
                );

                let productonuevo = await Producto.save() 
                console.log("producto nuevo");
                console.logal(productonuevo);
                return { productonuevo };        

        } 

    }catch (error) {

        return { error }
    }    
}

const getProducto = async (codigo) => {

    try{

        let Producto = await almacen.findOne({ codigo: codigo });

         return Producto;

    }catch (error) {

        console.log(error);
    }    

}

const deleteProducto = async (codigo) => {
    
    await producto.deleteOne({ codigo: codigo }).then(function(){
    
        console.log("Producto deleted"); // Success
    
    }).catch(function(error){
    
        console.log(error); // Failure
    
    });
}


const getProductos = async () => {

    try{
        
        let Productos = await producto.find({})
        return Productos;
    
    }catch (error) {

        console.log(error);
    }  
}





module.exports = { addProducto, getProducto, deleteProducto, getProductos }
