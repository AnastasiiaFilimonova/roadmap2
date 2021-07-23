const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CompanySchema = new Schema({
    name: String,
    catchPhrase: String,
    bs: String
})

const UserSchema = new Schema({
    id: Number,
    name: String,
    username: String,
    email: String,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: Number,
            lng: Number
        }
    },
    phone: Number,
    website: String,
    company: CompanySchema
        

});

const model = mongoose.model('User', UserSchema, 'users');

module.exports = model;