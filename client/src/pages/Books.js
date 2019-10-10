// TODO import React Router Here

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/AddButton";
import SearchBtn from "../components/SearchBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };

  // Add code here to get all books from the database and save them to this.state.books
  componentDidMount() {
    // this.getbooks();
    this.getbooks();
  }

  getbooks = () => {
    API.getBooks().then(data => this.setState({ books: data.data }));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="12">
            <Jumbotron>
              <h1>Saved Books</h1>
            </Jumbotron>
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
                  >
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
