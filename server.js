const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const conn = require("./config/db");
const jwtCheck = require("./config/jwt");

const mainRoute = require("./routes/index");

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(jwtCheck);

app.use("/", mainRoute);

app.listen(port, () => console.log(`Server started at port:${port}`));

conn();
