const mongoose = require("mongoose");

const connection = async() => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect("mongodb+srv://harshit_127:harshitbh@cluster0.jtpfbpc.mongodb.net/?retryWrites=true&w=majority",connectionParams);
        console.log("Connected to database");
    } catch(err) {
        console.log("Could not connect to the database");
        console.log(err);
    }
}

module.exports = connection;