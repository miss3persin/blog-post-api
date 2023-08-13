const jsonServer = require('json-server');
const { blogPostAmount } = require('./generateData');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Custom middleware to handle root URL
const customRootMiddleware = (req, res, next) => {
  if (req.url === '/') {
    res.send('Welcome to the Blog Posts API');
  } else {
    next();
  }
};

server.use(customRootMiddleware);
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/posts', (req, res) => {
  const count = parseInt(req.query.count) || 10;
  const blogPosts = blogPostAmount(count);

  res.jsonp(blogPosts);
});

server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
