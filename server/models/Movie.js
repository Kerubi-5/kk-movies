const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  email: "string",
  movies: [
    {
      name: "string",
      imgSrc: "string",
    },
  ],
});

module.exports = mongoose.model("Movie", MovieSchema);
