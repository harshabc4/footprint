const express = require("express");
const router = express.Router();

// import controllers
const { getCarbon } = require("../controllers/carbon");

// import middlewares

// api routes
router.get("/carbon", getCarbon);
// router.get("https://api.websitecarbon.com/site?url=google.com", getCarbon);

module.exports = router;
