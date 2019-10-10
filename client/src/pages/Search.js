import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import AddButton from "../components/AddButton";
import SearchBtn from "../components/SearchBtn";

import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input } from "../components/Form";
import API from "../utils/API";

class Search extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: [],
    bookSearch: ""
  };

  // Add code here to get all books from the database and save them to this.state.books
  componentDidMount() {
    // this.getbooks();
    // this.getGoogleBooks();
  }

  getbooks = () => {
    API.getBooks().then(data => this.setState({ books: data.data }));
  };

  handleAddtoSaved = id => {
    API.saveBook(id).then(console.log("Boook added written to the DB"));
  };

  // ? is this needed
  getGoogleBooks = searchTerm => {
    // this.setState({ searchTerm: searchTerm});
    API.getGoogleBooks(searchTerm)
      .then(data => this.setState({ books: data }))
      .catch(err => console.log(err));
    // .then(console.log(searchTerm));
  };

  handleFind = event => {
    event.preventDefault();
    API.getGoogleBooks(this.state.bookSearch)
      .then(data => this.setState({ books: data }))
      .catch(err => console.log(err));

    // const term = event.target.Search.value;
    // console.log(term);

    // this.setState({ searchTerm: term });
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search For a book</h1>
              <form>
                <Input
                  name="bookSearch"
                  value={this.state.bookSearch}
                  onChange={this.handleInputChange}
                  placeholder="Help me find a book!"
                />

                <SearchBtn onClick={this.handleFind}>Submit Book</SearchBtn>
              </form>
            </Jumbotron>
            <Col size="md-12 ">
              <h2>Books found for {this.state.bookSearch}</h2>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem
                      key={book._id}
                      id={book._id}
                      image={book.image}
                      title={book.title}
                      author={book.author}
                      synopsis={book.synopsis}
                      link={book.link}
                      handleAddtoSaved={this.handleAddtoSaved}
                    ></ListItem>
                  ))}
                </List>
              ) : (
                <h5>No Results to Display</h5>
              )}
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
