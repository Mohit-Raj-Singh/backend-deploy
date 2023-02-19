const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: String,
    pass: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };


// const mongoose = require("mongoose");



// const userSchema = mongoose.Schema({
//   email: { type: String, required: true },
//   pass: { type: String, required: true },
// });


// const userModel = mongoose.model("authuser", userSchema);


// module.exports = {
//   userModel,
// };
