const axios = require('axios')

// getting all users for admin
getHeadLines = async (req, res, next) => {
  try {
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'category=general&' +
      'country=za&' +
      'pageSize=10&' +
      'apiKey=a5ed448a48fc49a7b60007499047e63a';

    const news_get = await axios.get(url)
    newsHeadLine = res.json('news', { articles: news_get.data.articles })
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
      'apiKey={YOUR_API}';

    const news_get = await axios.get(url)
    newsScience = res.json('news', { articles: news_get.data.articles })
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
      'apiKey={YOUR_API}';

    const news_get = await axios.get(url)
    newsTech = res.json('news', { articles: news_get.data.articles })
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
  // console.log(req.body.search)
  try {
    var url = `http://newsapi.org/v2/everything?q=${search}&apiKey={YOUR_API}`
    const news_get = await axios.get(url)
    queriedSearch = res.json('news', { articles: news_get.data.articles })
  } catch (error) {
    if (error.response) {
      console.log(error)
    }
  }
  next();
};