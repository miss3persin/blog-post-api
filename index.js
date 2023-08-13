const express = require("express");
const { blogPostAmount } = require("./generateData");

const server = express();

const customRootMiddleware = (req, res, next) => {
  if (req.url === "/") {
    const message = '<h1>This is a Blog Posts API.</h1><h4>For a default number of blog posts (10) add "/posts" to the base URL.<br><br>For a preferred number of blog posts add "/posts?count=[insert amount you want]" to the base URL.</h4>';
    res.send(message);
  } else {
    next();
  }
};

server.use(express.json());
server.use(customRootMiddleware);

server.use((req, res, next) => {
  res.status(404).send('<h1>Not an endpoint</h1>');
});


server.get("/posts", (req, res) => {
  const count = parseInt(req.query.count) || 10;
  const blogPosts = blogPostAmount(count);

  res.jsonp(blogPosts);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
