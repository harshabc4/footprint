const express = require("express");
const router = express.Router();

// import controllers
const { getCarbon } = require("../controllers/carbon");

// import middlewares

// api routes
router.get("/carbon", getCarbon);

module.exports = router;
