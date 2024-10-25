const { default: mongoose, Types } = require("mongoose");
const database = require("../Database/MongoDb");

const UserSchema = new mongoose.Schema({
    name: {
        type: String, // Corrected 'types' to 'type'
        required: true // Corrected 'require' to 'required'
    },
    email: {
        type: String, // Corrected 'types' to 'type'
        unique: true,
        required: true // Corrected 'require' to 'required'
    },
    password: {
        type: String, // It should be String for password, not Number
        required: true // Corrected 'require' to 'required'
    },
    role: {
        type: String,
        default: "User"
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
