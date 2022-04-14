const {Router} = require('express');
const router = Router();
const { apiRequests } = require("../middleware");

// getting top headlines
router.get("/top-headlines", apiRequests.getHeadLines, async (req, res) => {
  res.send(await req.newsHeadLine);
});

// getting science
router.get("/science", apiRequests.getScience, async (req, res) => {
  res.send(await req.newsScience);
});

// getting tech
router.get("/technology", apiRequests.getTech, async (req, res) => {
  res.send(await req.newsTech);
});

// posting search query
router.post("/search", apiRequests.postQuery, async (req, res) => {
  res.send(await req.queriedSearch);
});

module.exports = router