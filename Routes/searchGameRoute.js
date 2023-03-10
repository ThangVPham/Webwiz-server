const { searchGame } = require("../Controller/searchGameController");
const express = require("express");
const router = express.Router();
router.post("/games", searchGame);

module.exports = router;
