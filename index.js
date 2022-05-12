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

const uri = process.env.MONGO_URI;

const Usr = require("./models/users");
const parte = require("./models/parte");
const laboratorio = require("./models/laboratorio");
const almacen = require("./models/almacen");
const deposito = require("./models/deposito");
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

app.get("/users", async (req,res) =>{

    users = await getUsers();
    res.json({users:users});

});
app.get("/laboratorio", async (req,res) =>{

  laboratorios = await getLaboratorios();
  res.json({laboratorios:laboratorios});

});
app.get("/almacen", async (req,res) =>{

  almacenes = await getAlmacenes();
  res.json({almacenes:almacenes});

});

app.get("/deposito", async (req,res) =>{

  depositos = await getDepositos();
  res.json({depositos:depositos});

});
app.get("/parte", async (req,res) =>{

  partes = await getPartes();
  res.json({partes:partes});

});



app.get("/users/:email", async (req,res) =>{
    const email = req.params.email;
    user = await getUser(email);
    res.json({user:user}); 
});

app.get("/almacen/:email", async (req,res) =>{
  const email = req.params.email;
  almacen = await getAlmacen(email);
  res.json({almacen:almacen}); 
});
app.get("/deposito/:email", async (req,res) =>{
  const email = req.params.email;
  deposito = await getDeposito(email);
  res.json({deposito:deposito}); 
});
app.get("/parte/:id", async (req,res) =>{
  const id = req.params.id;
  almacen = await getAlmacen(id);
  res.json({parte:parte}); 
});
app.get("/laboratorio/:email", async (req,res) =>{
  const email = req.params.email;
  laboratorio = await getAlmacen(email);
  res.json({laboratorio:laboratorio}); 
});



app.delete("/users/:email",async (req,res) =>{
    const email = req.params.email;
    user = await getUser(email);
    res.json({user:user}); 
});

app.delete("/almacen/:email", async (req,res) =>{
  const email = req.params.email;
  almacen = await getAlmacen(email);
  res.json({almacen:almacen}); 
});
app.delete("/deposito/:email", async (req,res) =>{
  const email = req.params.email;
  deposito = await getDeposito(email);
  res.json({deposito:deposito}); 
});
app.delete("/parte/:id", async (req,res) =>{
  const id = req.params.id;
  almacen = await getAlmacen(id);
  res.json({parte:parte}); 
});
app.delete("/laboratorio/:email", async (req,res) =>{
  const email = req.params.email;
  laboratorio = await getAlmacen(email);
  res.json({laboratorio:laboratorio}); 
});



http.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});

