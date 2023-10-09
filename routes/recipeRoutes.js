const express = require("express")
const { index, show } = require("../controllers/recipeController")


const router = express.Router()

router.get("/", index)
router.get("/:idx", show)


module.exports = router