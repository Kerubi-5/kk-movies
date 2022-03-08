const MovieModel = require("../models/Movie");

exports.index = async (req, res) => {
  try {
    const { email } = req.query;

    const results = await MovieModel.find({ email: email });

    if (results?.length < 1 || results === undefined) {
      res.json({ msg: "No saved movies" });
      return;
    }

    res.json({ results });
  } catch (err) {
    res.json({ msg: err.message });
  }
};

exports.store = async (req, res) => {
  const { email, id, name, imgSrc } = req.body;
  let errors = [];
  if (!email || !name || !imgSrc || !id)
    errors.push({ msg: "Incomplete fields entered" });

  const movies = {
    id,
    name,
    imgSrc,
  };

  try {
    const foundMovie = await MovieModel.findOne({ email }).exec();

    if (!foundMovie) {
      newMovie = new MovieModel({
        email,
        movies,
      });
      await newMovie.save();
    } else {
      await MovieModel.findOneAndUpdate(
        { email },
        { $push: { movies: movies } }
      );
    }

    if (errors.length > 0) {
      res.json(errors);
      return;
    }

    res.json({ msg: "Transaction completed" });
  } catch (err) {
    res.json({ msg: err.message });
  }
};

exports.edit = async (req, res) => {};

exports.delete = async (req, res) => {};
