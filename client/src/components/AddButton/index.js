import React from "react";
import axios from "axios";
// import "./style.css";



class AddButton extends React.Component{
 
    postToDB = (book) => {
        
      var dbBook = {
          title: book.title,
          author: book.author,
          synopsis: book.synopsis,
          image: book.image,
          link: book.link

        }
    
        axios.post("/api/books", dbBook)
        .then( () => console.log("Biij reakky Added!"))
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <button type="primary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Save Book
        </button>
        </div>
        );
    }
  }
export default AddButton;


  
