// - REACT_APP_API_KEY = "a5ed448a48fc49a7b60007499047e63a"
// - REACT_APP_URL_LINK = "https://newsapi.org"
const {Router} = require('express');
const router = Router();
// const { userRequests } = require("../middleware");

// getting top headlines
router.get("/top-headlines", userRequests.getAllUsers, async (req, res) => {
  res.send(await req.user);
});

// getting science
router.get("/science", userRequests.getAllUsers, async (req, res) => {
  res.send(await req.user);
});

// getting tech
router.get("/technology", userRequests.getAllUsers, async (req, res) => {
  res.send(await req.user);
});

// posting search query
router.post("/search", userRequests.getAllUsers, async (req, res) => {
  res.send(await req.user);
});

newsr.get('/top-headlines', async (req, res) => {
  try {
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'category=general&' +
      'country=za&' +
      'pageSize=10&' +
      'apiKey=a5ed448a48fc49a7b60007499047e63a';

    const news_get = await axios.get(url)
    res.json('news', { articles: news_get.data.articles })
  } catch (error) {
    if (error.response) {
      console.log(error)
    }
  }
})

newsr.get('/science', async (req, res) => {
  try {
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'category=science&' +
      'country=za&' +
      'pageSize=10&' +
      'apiKey={YOUR_API}';

    const news_get = await axios.get(url)
    res.json('news', { articles: news_get.data.articles })
  } catch (error) {
    if (error.response) {
      console.log(error)
    }
  }
})

newsr.get('/technology', async (req, res) => {
  try {
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'category=technology&' +
      'country=za&' +
      'pageSize=10&' +
      'apiKey={YOUR_API}';

    const news_get = await axios.get(url)
    res.json('news', { articles: news_get.data.articles })
  } catch (error) {
    if (error.response) {
      console.log(error)
    }
  }
})

newsr.post('/search', async (req, res) => {
  const search = req.body.search
  // console.log(req.body.search)
  try {
    var url = `http://newsapi.org/v2/everything?q=${search}&apiKey={YOUR_API}`

    const news_get = await axios.get(url)
    res.render('news', { articles: news_get.data.articles })
  } catch (error) {
    if (error.response) {
      console.log(error)
    }
  }
})


module.exports = router