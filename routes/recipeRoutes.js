const express = require("express")
const { index, show } = require("../controllers/recipeController")


const router = express.Router()

router.get("/", index)
router.get("/:uriName", show)


module.exports = router