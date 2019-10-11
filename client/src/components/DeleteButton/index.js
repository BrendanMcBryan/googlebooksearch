import React from "react";
import axios from "axios";
import "./style.css";


// TODO excute removal from DB via Book Id
class DeleteButton extends React.Component{
 
    deletfromDB = (book) => {
        
      var dbBook = {
          title: book.title,
          author: book.author,
          synopsis: book.synopsis,
          image: book.image,
          link: book.link

        }
    
        axios.post("/api/books", dbBook)
        .then( () => console.log("Book deleted"))
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <button className="btn btn-secondary " type="primary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Remove Book
        </button>
        </div>
        );
    }
  }
export default DeleteButton;


  
