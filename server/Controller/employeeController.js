const employeeModel = require("../models/employeeModel");
const express = require('express');
const mongoose = require('mongoose');

const Operations = {
  add(regEmployee, res) {
    employeeModel.create(regEmployee, (err) => {
      if (err) {
        console.log(err)
        res.send('Error occured during registration');
      }
      else {
        res.send('Employee Record Added....');
      }
    })
  },

  get_all(req, res, next) {
    employeeModel.find().select("_id firstname lastname email phonenumber currentaddress permanentaddress photo")
      .exec()
      .then(docs => {
        const response = {
          emp: docs.map(doc => {
            return {
              id: doc._id,
              firstname: doc.firstname,
              lastname: doc.lastname,
              email: doc.email,
              phonenumber: doc.phonenumber,
              currentaddress: doc.currentaddress,
              permanentaddress: doc.permanentaddress,
              photo: doc.photo
            };
          })
        };
        res.status(200).json(response)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          error: err
        });
      });
  },

  view(id, res) {
    employeeModel.findOne({ _id: id }, (err, doc) => {
      if (err) {
        res.send('Employee Details not found')
      } else {
        res.send(doc)
      }
    })
  },

  delete(id, res) {
    employeeModel.deleteOne({ _id: id }, (err) => {
      if (err) {
        res.send('Record does not exist')
      } else {
        res.send('Record delted successfully!')
      }
    })
  },


}

module.exports = Operations;