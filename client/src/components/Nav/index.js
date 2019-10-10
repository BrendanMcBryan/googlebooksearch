import React from "react";

// TODO use LINK from react router for the buttons up here.

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google React Reading List
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Search <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/saved">
              Saved Items
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
