const express = require("express");
const faker = require("faker");

const server = express();


function generateComments() {
  const numComments = Math.floor(Math.random() * 7);
  const comments = [];

  for (let i = 0; i < numComments; i++) {
    comments.push({
      author: faker.name.findName(),
      text: faker.lorem.paragraph(),
      date: faker.date.past(),
    });
  }

  return comments;
}


function generateBlogPost(id) {
  return {
    id: id,
    title: faker.lorem.sentence(),
    author: faker.name.findName(),
    date: faker.date.past(),
    content: faker.lorem.paragraphs(10),
    tags: faker.lorem.words(Math.floor(Math.random() * 7)).split(" "),
    categories: faker.lorem.words(Math.floor(Math.random() * 7)).split(" "),
    featuredImage: "https://picsum.photos/600/400",
    comments: generateComments(),
  };
}


const blogPostAmount = (count) => {
  const blogPosts = [];

  for (let i = 1; i <= count; i++) {
    blogPosts.push(generateBlogPost(i));
  }
  return blogPosts;
};


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



server.get("/posts", (req, res) => {
  const count = parseInt(req.query.count) || 10;
  const blogPosts = blogPostAmount(count);
  
  res.jsonp(blogPosts);
});


server.use((req, res, next) => {
  res.status(404).send('<h1>Not an endpoint</h1>');
});
const PORT = process.env.PORT || 3000;


server.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
