const connection = require("./connectToDatabase");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const itemRouter = require("./routes/item");

// CONNECT TO THE DATABASE
connection();

// APP SETTINGS
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors({
    origin : "*"
}));

// APP ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/items", itemRouter);


app.listen(8000,console.log("App listening on port 8000"));