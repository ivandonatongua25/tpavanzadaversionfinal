const express = require("express");
const app =express();
const mongoose = require("mongoose");
const http = require("http").createServer(app);
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { addUser, getUser, deleteUser, getUsers } = require("./controllers/users");
const { addAlmacen, getAlmacen, deleteAlmacen, getAlmacenes } = require("./controllers/almacen");
const { addLaboratorio, getLaboratorio, deleteLaboratorio, getLaboratorios }= require("./controllers/laboratorio");
const  { addParte, getParte, deleteParte, getPartes } = require("./controllers/parte");
const { addDeposito, getDeposito, deleteDeposito, getDepositos } = require("./controllers/deposito");
const { addProducto, getProducto, deleteProducto, getProductos } = require("./controllers/producto");

const uri = process.env.MONGO_URI;

const Usr = require("./models/users");
const parte = require("./models/parte");
const laboratorio = require("./models/laboratorio");
const almacen = require("./models/almacen");
const deposito = require("./models/deposito");
const producto = require("./models/producto");
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is up and running");
});


//************ USER ADD  ********************/
app.get("/users", async (req,res) =>{

  Usr = await addUser();
  res.json({user:Usr});

});
// **************** USER GET TODOS LOS USUARIOS ****************************/
app.get("/users", async (req,res) =>{

  Usr = await getUsers();
  res.json({Usr:Usr});

});
//**** USER GET CON FILTRO  *******/
app.get("/users/:email", async (req,res) =>{
  const email = req.params.email;
  Usr = await getUser(email);
  res.json({user:Usr}); 
});
//**********USER BORRAR CON FILTRO*******************/
app.delete("/users/:email",async (req,res) =>{
  const email = req.params.email;
  Usr = await getUser(email);
  res.json({user:Usr}); 
});






//*******************LABORATORIO ADD **********************/
app.get("/laboratorio", async (req,res) =>{

  laboratorio = await addLaboratorio();
  res.json({laboratorio:laboratorio});

});

// **************** LABORATORIO GET TODOS LOS LABORATORIOS ****************************/

app.get("/laboratorios", async (req,res) =>{

  laboratorio = await getLaboratorios();
  res.json({laboratorio:laboratorio});

});

/*******************LABORATORIO GET CON FILTRO *********************************/
app.get("/laboratorio/:email", async (req,res) =>{
  const email = req.params.email;
  laboratorio = await getLaboratorio(email);
  res.json({laboratorio:laboratorio}); 
});
/*******************LABORATORIO BORRAR  *********************************/
app.delete("/laboratorio/:email", async (req,res) =>{
  const email = req.params.email;
  laboratorio = await getLaboratorio(email);
  res.json({laboratorio:laboratorio}); 
});







/************************* ALMACEN ADD  *********************************/
app.get("/almacen", async (req,res) =>{

  almacen = await addAlmacen();
  res.json({almacen:almacen});

});
/************************* ALMACEN GET TODOS LOS ALMACEN *********************************/
app.get("/almacen", async (req,res) =>{

  almacen = await getAlmacenes();
  res.json({almacen:almacen});

});
/*******************ALMACEN GET CON FILTRO *********************************/
app.get("/almacen/:email", async (req,res) =>{
  const email = req.params.email;
  almacen = await getAlmacen(email);
  res.json({almacen:almacen}); 
});
/*******************ALMACEN BORRAR  *********************************/
app.delete("/almacen/:email", async (req,res) =>{
  const email = req.params.email;
  almacen = await getAlmacen(email);
  res.json({almacen:almacen}); 
});






//************************ DEPOSITO ADD   **************************************/
app.get("/deposito", async (req,res) =>{

  deposito = await addDeposito();
  res.json({deposito:deposito});

});
//**** DEPOSITO GET TODOS LOS DEPOSITOS  *******/
app.get("/deposito", async (req,res) =>{

  deposito = await getDepositos();
  res.json({deposito:deposito});

});
//*********************DEPOSITO GET CON FILTRO ***********************************/
app.get("/deposito/:email", async (req,res) =>{
  const email = req.params.email;
  deposito = await getDeposito(email);
  res.json({deposito:deposito});

});

//*********************DEPOSITO BORRAR ***********************************/
app.delete("/deposito/:email", async (req,res) =>{
  const email = req.params.email;
  deposito = await getDeposito(email);
  res.json({deposito:deposito}); 
});




//************************ PARTE ADD   **************************************/
app.get("/parte", async (req,res) =>{

  parte = await addParte();
  res.json({parte:parte});

});
//**** PARTE GET TODAS LAS PARTES  *******/
app.get("/parte/:limite", async (req,res) =>{
  const limite =req.params.limite;
  parte = await getPartes(limite);
  res.json({parte:parte});

});
//*********************PARTE GET CON FILTRO ***********************************/
app.get("/parte/:codigo", async (req,res) =>{
  const codigo = req.params.codigo;
  parte = await getParte(codigo);
  res.json({parte:parte}); 
});
//*********************PARTE BORRAR ***********************************/
app.delete("/parte/:codigo", async (req,res) =>{
  const codigo = req.params.codigo;
  parte = await getParte(codigo);
  res.json({parte:parte}); 
});





//********************   PRODUCTO ADD ****************************************************/
app.get("/producto", async (req,res) =>{
  producto = await addProducto();
  res.json({producto:producto});

});
//*********** PRODUCTO GET TODOS LAS PRODUCTOS  *****************************************/
app.get("/productos", async (req,res) =>{
  producto = await getProductos();
  res.json({producto:producto});

});
//******************  PRODUCTO GET CON FILTRO ***********************************/
app.get("/producto/:codigo", async (req,res) =>{
  const codigo = req.params.codigo;
  producto = await getParte(codigo);
  res.json({producto:producto}); 
});
//*********************PRODUCTO BORRAR ***********************************/
app.delete("/producto/:codigo", async (req,res) =>{
  const codigo = req.params.codigo;
  producto = await getProducto(codigo);
  res.json({producto:producto}); 
});




//*****************LEVANTO SERVIDOR  **************************************/
http.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});

