const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const EmployeeModel = require("./models/Employee");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://giuseppe_fal_user:8znOelOxN7L1r9Xc@crud-app.tq7hd.mongodb.net/employee?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
});

app.post("/insert", async (req, res) => {

const name = req.body.name
const age = req.body.age
const country = req.body.country
const position = req.body.position
const wage = req.body.wage

const employee = new EmployeeModel ({
    name: name,
    age: age,
    country: country,
    position: position,
    wage: wage });

  try {
   await employee.save();
   res.send("inserted data");
  } catch(err) {
      console.log(err)
  }
});


app.get("/read", async (req, res) => {
EmployeeModel.find({}, (err, result) => {
    if (err) {
        res.send(err);
    } 

    res.send(result);
});
});

app.listen(3001, () => 
console.log("Server is running on port 3001...")
);