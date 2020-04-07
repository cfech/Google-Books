import React from "react";
import "./style.css";

function Search() {
    return (
        <div className="jumbotron mySearch">
            <div className="row">
                <p className = "bookSearch">Book Search</p>
            </div>
            <div className="row book">
                <p>Book</p>
            </div>
            <input className = "col-12"placeholder="book search"></input>
        </div>
    );
}

export default Search;
