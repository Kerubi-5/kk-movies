const express = require("express");
const router = express.Router();
const MovieController = require("../controller/MovieController");

router.route("/saved").get(MovieController.index).post(MovieController.store);

module.exports = router;
