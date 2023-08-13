const express = require('express');
const { blogPostAmount } = require('./generateData');

const server = express();
// const router = ex.router('db.json');
// const middlewares = express.defaults();

const customRootMiddleware = (req, res, next) => {
  if (req.url === '/') {
    res.send('This is a Blog Posts API');
  } else {
    next();
  }
};

server.use(customRootMiddleware);
// server.use(middlewares);
server.use(express.json());

server.get('/posts', (req, res) => {
  const count = parseInt(req.query.count) || 10;
  const blogPosts = blogPostAmount(count);

  res.jsonp(blogPosts);
});

// server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
