const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());



app.get("/getdata", async (req,res)=>{
    await mongoose.connect("mongodb+srv://azizsafouane167:dmdLtPqHN70UnzQ8@cluster0.q30n1.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0")
  
    const db = mongoose.connection.db;
  
    const data = await db.collection('testcollec').find({}).toArray();
    res.send(data);
});

app.post("/postdata", async (req,res) => {
    await mongoose.connect("mongodb+srv://azizsafouane167:dmdLtPqHN70UnzQ8@cluster0.q30n1.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0")

    const data = req.body;
    

    const db = mongoose.connection.db;
    const collec = await db.collection('testcollec');
    const result = await collec.insertOne(data);
    res.send(result)
  
});
app.get("/deletedata", async (req,res)=>{
  await mongoose.connect("mongodb+srv://azizsafouane167:dmdLtPqHN70UnzQ8@cluster0.q30n1.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0")
  const db = mongoose.connection.db;
  const collec = db.collection("testcollec");
  const result = await collec.deleteMany({});
  res.send(result)
});

app.listen(3000);
