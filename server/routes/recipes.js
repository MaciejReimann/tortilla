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

  // TODO: get further pages and concatenate until the content gets repeated, but the first time send immediately

  let page = 1;
  console.log(ingredients);

  axios
    .get(`${recipe_puppy}/api/?i=${ingredients}&p=${page}`)
    .then(response => {
      const body = response.data.results;
      res.send({ body });
    })
    .catch(err => {
      console.error(err.message);
    });
});

module.exports = router;
