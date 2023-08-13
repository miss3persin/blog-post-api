# Blog Post API for Website Testing

This repository contains a simple API that generates dummy blog post data for testing purposes. The API is built using Node.js and the 'json-server' package. It's designed to provide realistic dummy data that can be used to populate a website's blog post section during development and testing.

## Features

- Generates realistic blog post data, including titles, authors, content, dates, and tags.
- Provides endpoints for accessing blog post data in JSON format.
- Customizable number of blog posts and other data parameters.

## Usage

1. Clone this repository to your local machine.

   ```sh
   git clone https://github.com/miss3persin/blog-post-api.git
   ```

2. Navigate to the project directory.

   ```sh
   cd blog-post-api
   ```

3. Install the required dependencies.

   ```sh
   npm install
   ```

4. Start the API server.

   ```sh
   node server.js
   ```

   The API server will run at `http://localhost:3000`.

5. Access the generated blog post data by visiting the following endpoint:

   ```
   http://localhost:3000/posts
   ```

   You can also customize the number of generated posts by appending `?count=10` to the URL (replace `10` with the desired number).

## Customization

You can customize the generated data by modifying the `generateData.js` script. Adjust the parameters and data generation methods as needed to match your requirements.

## Contributing

Contributions to this repository are welcome. Feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the [ISC License].

---

Happy website testing!

