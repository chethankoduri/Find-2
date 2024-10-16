const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/countriesList",async(req,res)=>{
    let countriesList = await Employee.find().distinct("country");
    return res.json(countriesList);
});

app.get("/departmentsList",async(req,res)=>{
    let departmentsList = await Employee.find().distinct("department");
    return res.json(departmentsList);
});

app.get("/gendersList",async(req,res)=>{
    let gendersList = await Employee.find().distinct("gender");
    return res.json(gendersList);
});

app.get("/employees",async(req,res)=>{
    let employeesArr = await Employee.find()
    //.distinct("gender");
    //.select("department")
    //.sort("department country")
    //.and([{country:"Russia"},{gender:"Male"},
   // {age: {$gte: 21, $lte: 50}},
//])
//.countDocuments();
 // .limit(20).skip(500);
    
    res.json(employeesArr);
});

app.listen(2222,()=>{
    console.log("Listening to Port 2222");
});

let employeeSchema = new mongoose.Schema({

id:Number,
firstName:String,
lastName:String,
email:String,
gender:String,
age:Number,
department:String,
profilePic:String,
salary:Number,
country:String,
});

let Employee = new mongoose.model("employee", employeeSchema,"employees")

let connectToMDB = async ()=>{
    try {
        mongoose.connect("mongodb+srv://chethankoduri:chethan@chethan.ifthz.mongodb.net/tata?retryWrites=true&w=majority&appName=chethan");
        console.log("sucessfully  connected to MDB");
        let employeesArr = await Employee.find();
        console.log(employeesArr);
    } catch (err) {
        console.log("unable to connect to MDB");
    }
};

connectToMDB();