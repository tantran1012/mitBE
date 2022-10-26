const mongoose = require("mongoose");

async function connect() {

    await mongoose.connect("mongodb+srv://mitadmin:mitadmin123@mit.v0hxaqx.mongodb.net/mitDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database connected");
    }).catch((error) => {
        console.log("Error connecting to database");
    });
}

module.exports = { connect };