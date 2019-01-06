const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route   GET recipes/test
// @desc    Tests recipes route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Recipes route works!" }));

// @route   GET recipes/:ingredients
// @desc    Get list of recipes
// @access  Public
router.get("/:ingredients", (req, res) => {
  const { recipe_puppy } = require("../constants/URLs");
  const { ingredients } = req.params;
  // TODO: validate user input before sent further

  // TODO: get further pages and concatenate until the content gets repeated;
  let page = 1;

  // Send the first page immediately:
  let data;
  axios
    .get(`${recipe_puppy}/api/?i=${ingredients}&p=${page}`)
    .then(response => {
      data = response.data.results;
      res.send(data);
    })
    .catch(err => {
      res.send(data);
      // Error status?
      console.error(err.message);
    });
});

module.exports = router;
