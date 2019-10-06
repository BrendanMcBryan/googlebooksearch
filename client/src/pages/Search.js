import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import SearchBtn from "../components/SearchBtn";

import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class Search extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: [],
    bookSearch: "Dummy Search Term"
  };

  // Add code here to get all books from the database and save them to this.state.books
  componentDidMount() {
    // this.getbooks();
    this.getGoogleBooks();
  }

  getbooks = () => {
    API.getBooks().then(data => this.setState({ books: data.data }));
  };

  getGoogleBooks = searchTerm => {
    // this.setState({ searchTerm: searchTerm});
    API.getGoogleBooks(searchTerm).then(data => this.setState({ books: data }));
    // .then(console.log(searchTerm));
  };

  handleFind = event => {
    event.preventDefault();
    API.getGoogleBooks(this.state.bookSearch).then(data => this.setState({ books: data })).catch(err => console.log(err));

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
              <h1>Books found for {this.state.bookSearch}</h1>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
