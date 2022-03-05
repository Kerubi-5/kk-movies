const MovieModel = require("../models/Movie");

exports.index = (req, res) => {
  res.json({ msg: "The start of the app" });
};

exports.store = async (req, res) => {
  const { email, name, imgSrc } = req.body;
  let errors = [];
  if (!email || !name || !imgSrc)
    errors.push({ msg: "Incomplete fields entered" });

  const movies = {
    name,
    imgSrc,
  };

  try {
    let foundMovie = MovieModel.findOne({ email });

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
