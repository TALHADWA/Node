const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const expresss=express();
const http=require("http");
const port= process.env.port || 4545 ;
var server= http.createServer(expresss);
const socket=require("socket.io")(server);
expresss.use(express.json());
// expresss.use(cors());

socket.on('connection', (socket) => {
  console.log("fff");
  console.log(socket.id);
  socket.on("/fuck", (msg)=>{
    console.log(msg);
 })
 });
 


server.listen(port,()=>{
console.log(port);
})









