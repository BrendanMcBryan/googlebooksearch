import axios from "axios";

export default {
  // TODO hit api to get list of books
  // TODO concat authors into a string before sending off.

  getGoogleBooks: function(searchTerm) {
    return new Promise((resolve, reject) => {
      // const searchTerm = "Flowers";
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then(res => {
          const users = res.data.items;
          const results = users.map(book => {
            return {
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors,
              synopsis: book.volumeInfo.description,
              image: book.volumeInfo.imageLinks.thumbnail
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
