const {Router} = require('express');
const router = Router();
const newsCategories = require("./categories.routes");

// Routes

// simple route
router.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Welcome to the api" });
});

router.use('/news', newsCategories);


module.exports = router;