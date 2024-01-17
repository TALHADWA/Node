const xpress = require("express");
const monogo = require("mongoose");

const bcryptsa=require("bcrypt");
const signup=require("./models/signup");
const models = require("./models/model");
const parser = require("body-parser");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = xpress();

// Enable CORS at the beginning
const corsOptions = {
    origin: '*', // or specify a specific origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

monogo.connect("mongodb+srv://talhaali21cv:jrT8pRzeFAhvGF4o@cluster0.jsmg5yb.mongodb.net/?retryWrites=true&w=majority").then(function () {
  console.log("kjjedehk");

app.post("/signup",async function(req,res){
  try{
    const data=req.body;
   const alls= await signup.findOne({email:data.email});
   if(!alls){
    const all=signup(data);
    await all.save();
    res.json(all);
   }
   else{
    res.json("enter other email");
   }
  }
  catch(error){
    res.json(error);
  }

});
app.post("/login",async function(req,res){

    const {email,password}=req.body;

    const asdd= await signup.findOne({email: email});

   if(!asdd){
   return res.json("Not user found");
   }
   else{
    const check= await bcryptsa.compare(password,asdd.password);
  if(!check){
    return res.json("not match");
  }
  else
{
  res.json(check);
}
   }

});

app.get("/All", async function (req, res) {
        const data = await signup.find();
        res.json({'data':data});
    });
    app.post("/delete/:name", async function (req, res) {
        const data = await models.deleteOne({name:req.params.name});
        res.json(data);
    });
    app.get("/search/:name", async function (req, res) {
        const data = await models.find({ name: req.params.name});
        res.json(data);
    });

    app.post("/add", async function (req, res) {
     
      const data= new models(req.body);
       
// if(note.age < 18){
//  return res.status(300).json({
//     "message":"sendage less then 18"
//  });
// }
 
// else{
  try{
    const sx = await data.save();
    res.json(sx);
  }
  catch(error){
    res.send(error);
  }
    });
});

app.listen(8389);
 
 
 
 
