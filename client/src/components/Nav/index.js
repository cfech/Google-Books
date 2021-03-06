import React from "react";
import { Link } from "react-router-dom"
import "./style.css"

//Exporting nav component
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg myNav">
      <Link className="navbar-brand" to="/"> GOOGLE BOOKS</Link>

      <Link className="navbar-brand" to="/search"> Search</Link>

      <Link className="navbar-brand" to="/saved"> Saved</Link>
    </nav>
  );
}

//Exporting nav component
export default Nav;
