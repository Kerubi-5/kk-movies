exports.index = (req, res) => {
  res.json({ msg: "The start of the app" });
};

exports.store = (req, res) => {
  const data = { ...req.body };
  res.json({ data });
};
