const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    thoughts:{}
    });

module.exports = Users;