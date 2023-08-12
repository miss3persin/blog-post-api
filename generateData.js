const faker = require('faker');

function generateComments() {
  const numComments = Math.floor(Math.random() * 7);
  const comments = [];

  for (let i = 0; i < numComments; i++) {
    comments.push({
      author: faker.name.findName(),
      text: faker.lorem.paragraph(),
      date: faker.date.past()
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
    tags: faker.lorem.words(Math.floor(Math.random() * 7)).split(' '),
    categories: faker.lorem.words(Math.floor(Math.random() * 7)).split(' '),
    featuredImage: faker.image.imageUrl(),
    comments: generateComments()
  };
}


const blogPosts = [];
for (let i = 1; i <= 500; i++) {
  blogPosts.push(generateBlogPost(i));
}

module.exports = { blogPosts };
