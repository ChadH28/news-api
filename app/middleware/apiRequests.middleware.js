// - REACT_APP_API_KEY = "a5ed448a48fc49a7b60007499047e63a"
// - REACT_APP_URL_LINK = "https://newsapi.org"
const axios = require('axios')
const dotenv =  require('dotenv');
dotenv.config();
const key = process.env.API_KEY;


// getting all users for admin
getHeadLines = async (req, res, next) => {
  try {
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'category=general&' +
      'country=za&' +
      'pageSize=10&' +
      `apiKey=${key}`;
    console.log(url)
    const news_get = await axios.get(url)
    newsHeadLine = res.json(news_get.data.articles)
  } catch (error) {
    if (error.response) {
      console.log(error)
    }
  }
  next();
};


// getting science news
getScience = async (req, res, next) => {
  try {
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'category=science&' +
      'country=za&' +
      'pageSize=10&' +
      `apiKey=${key}`;

    const news_get = await axios.get(url)
    newsScience = res.json(news_get.data.articles)
  } catch (error) {
    if (error.response) {
      console.log(error)
    }
  }
  next();
};


// getting tech news
getTech = async (req, res, next) => {
  try {
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'category=technology&' +
      'country=za&' +
      'pageSize=10&' +
      `apiKey=${key}`;

    const news_get = await axios.get(url)
    newsTech = res.json(news_get.data.articles)
  } catch (error) {
    if (error.response) {
      console.log(error)
    }
  }
  next();
};


// posting a search query
postQuery = async (req, res, next) => {
  const search = req.body.search
  console.log(search)
  try {
    var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=${key}`
    const news_get = await axios.get(url)
    queriedSearch = res.json(news_get.data.articles)
  } catch (error) {
    if (error.response) {
      console.log(error)
    }
  }
  next();
};

const apiRequests = {
  getHeadLines,
  getScience,
  getTech,
  postQuery
};

module.exports = apiRequests;