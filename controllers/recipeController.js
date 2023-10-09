const Recipe = require("../models/Recipe")

const index = async (req, res) => {
  try {
    const recipes = await Recipe.getAll();
    res.status(200).json({
      success: true,
      recipes: recipes,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Unable to retrieve recipes",
      error: e,
    });
  }
};

const show = async (req, res) => {
  try {
    const idx = req.params.idx;
    const recipe = await Recipe.getOne(idx);
    res.status(200).json({
      success: true,
      recipe: recipe,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Unable to retrieve recipe",
      error: e,
    });
  }
};

module.exports = {
    index,
    show
}