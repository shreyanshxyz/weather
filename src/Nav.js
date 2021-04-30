import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav__main">
      <div className="nav__left">
        <h4>Logo</h4>
      </div>

      <div className="nav__right">
        <h4>
          <a href="https://www.example.com">Changelog</a>
        </h4>
        <h4>
          <a href="https://www.example.com">DL</a>
        </h4>
      </div>
    </div>
  );
}

export default Nav;
