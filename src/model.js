import mongoose from 'mongoose';

require('dotenv').config();

if (process.env.MONGODB_URI === undefined) {
    console.error("No MongoDB URI provided");
};

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

let db = mongoose.connection;
console.log(
    (!db) 
        ? "Error connecting database"
        : "Database connected successfully"
);

let personSchema = mongoose.Schema({
    user_id: {
        type: Number,
        unique : true,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    ip_address: {
        type: String,
    },
    job: {
        type: String,
    },
    skill: {
        type: String,
    },
});

var Person = (module.exports = mongoose.model("person", personSchema));
module.exports.get = (callback, limit) => {
    Person.find(callback).limit(limit);
};
