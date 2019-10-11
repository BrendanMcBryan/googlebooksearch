import React from "react";
import "./style.css";
import AddButton from "../AddButton";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-grouplist-unstyled">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return (
    <li className="media bg-light mb-3">
      <img className="mr-3" src={props.image} />

      <div className="media-body">
        {" "}
        <h2 className="mt-0">{props.title}</h2>
        <h4 className="mt-1">by {props.author}</h4>
        <p> {props.synopsis}</p>
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="book result buttom group"
        >
          <button
            type="button"
            name="link"
            data-link={props.link}
            className="btn btn-link bg-light bookLinkBtn"
          >

            <a target="_blank" href={props.link}>
              Book Link
            </a>
          </button>
        


          <AddButton type="button" className="saveBookBtn" {... props} onClick={() => props.handleAddtoSaved(props)}>
            Save Book
          </AddButton>


        </div>
      </div>
    </li>
  );
}
