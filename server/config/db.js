const mongoose = require("mongoose");

const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;
const db = process.env.MONGO_DB;
const uri = `mongodb+srv://${user}:${pass}@kk.hqg1x.mongodb.net/${db}?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const conn = () => {
  mongoose
    .connect(uri, options)
    .then(() => console.log("Mongo Atlas DB Connection successful"))
    .catch((err) => console.log(`Error MongoDB Connection: ${err}`));
};

module.exports = conn;
