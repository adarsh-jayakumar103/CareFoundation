var express=require("express");
var bodyParser=require("body-parser");
  
const mongoose = require('mongoose');
const createApplication = require("express/lib/express");
mongoose.connect('mongodb+srv://newuser:newuser@cluster0.uf2kh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
  
var app=express()
  
  
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.post('/register', function(req,res){
    var name = req.body.fullname;
    var email =req.body.email;
    var pass = req.body.password;
    var password = req.body.cpp;
    var phone =req.body.phnum;
    var aadhar=req.body.aadhar;
    var dob = req.body.date;
    
   
  
    var data = {
        "fname": fullname,
        "email":email,
        "aadhar" : aadhar,
        "pass":password,
        "password":cpp,
        "phnum":phnum,
        "dob":date,
        

    }

console.log(fullname + email + password + phnum);
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
          
    return res.redirect('login.html');
})
app.post('/login',function(req,res){
    console.log("hello");
    var Name = req.body.Uname;
    var pass = req.body.Pass;
    
    db.collection('details').find().toArray(function(err, items) {
            if(err) throw err;    
            for(let i=0;i<items.length;i++)
                {
                    if(items[i].Uname===Uname){
                        if(items[i].password===Pass)
                            {
                                console.log("valid account");
                            }
                        else{
                            console.log("invalid password");
                        }
                        
                    }
                    else{
                        console.log("invalid username")
                    }
                }
        });
    });


  
  
app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
return res.redirect('signup.html');
}).listen(3000)
  
  
console.log("server listening at port 3000");
