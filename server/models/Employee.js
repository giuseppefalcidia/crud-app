const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
    },
     age: {
         type: Number,
         required: true
     },
     country: {
         type: String,
         required: true
     },
     position: {
         type: String,
         required: true
     },
     wage: {
         type: Number,
         required: true
     }
})

const Employee = mongoose.model("employee", EmployeeSchema);
module.exports = Employee;