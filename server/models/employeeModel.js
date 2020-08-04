const mongoose =require('mongoose')
const express = require('express');

const Schema = mongoose.Schema

let Employee = new Schema({
    firstname: {
        type: String,
        trim:String,
        required:true,
        minlength: [3, 'Must be at least 3 characters.'],
        maxlength: [10, 'Must be less than 10 characters.']
    },
    lastname: {
        type: String,
        trim:String,
        required:true,
        minlength: [3, 'Must be at least 3 characters.'],
        maxlength: [10, 'Must be less than 10 characters.']
    },
    email: {
        type: String,
        trim:String,
        required:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    phonenumber: {
        type: Number,
        required:true,

    },
    currentaddress: {
        type: String,
        required:true
    },
    permanentaddress: {
        type: String,
        required:true
    },
    photo: {
         type: String
    },
    edu_details: [{
        course: {
            type: String,
            trim:true,
            required:true
        },
        institution: {
            type: String,
            trim:true,
            required:true
        },
        year: {
            type: Number,
            required:true,
            maxlength:[4, 'Must be a valid year']
        },
        percentage: {
            type: String,
            required:true,
        }
    }],
    prof_details: [{
        companyname: {
            type: String,
            trim:true,
            required:true
        },
        from: {
            type: Date,
            required:true
        },
        to: {
            type: Date,
            required:true,
        },
        designation: {
            type: String,
            trim: String,
            required: true
        }
    }],
    linkedin: {
        type: String,
        trim:String,
        required:true
    },
    github: {
        type: String,
        trim:String,
        required:true
    },
    facebook: {
        type: String,
        trim:String,
        required:true
    },
    hobbies: {
        type: String
    }

})

module.exports = mongoose.model('Employee',Employee);