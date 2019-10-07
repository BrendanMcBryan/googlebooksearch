import React from "react";
import "./style.css";

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
            onClick="window.location.href = '{props.link}';"
            className="btn btn-link bg-light bookLinkBtn"
          >
            Book Link
          </button>

          <button type="button" className="btn btn-dark saveBookBtn">
            Save Book
          </button>
        </div>
      </div>
    </li>
  );
}
