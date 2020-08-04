const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const Operations = require('../Controller/employeeController');
const Employee = require('../models/employeeModel')

router.post('/create', (req, res) => {
    const regEmployee = req.body
    Operations.add(regEmployee, res);
})

router.post('/viewEmp/:id', (req, res) => {
    const id = req.params.id
    Operations.view(id, res);
})

router.delete('/deleteEmp/:id', (req, res) => {
    const id = req.params.id
    Operations.delete(id, res);
})

router.get('/listAll', (req, res) => {
    Operations.get_all(req, res)
})



module.exports = router;