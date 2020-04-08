import React from "react";
import "./style.css";

function Search(props) {


   
    
    return (
        <div className="jumbotron mySearch">
            <div className="row">
                <p className = "bookSearch">Book Search</p>
            </div>
            <div className="row book">
                <p>Book</p>
            </div>
            <input className = "col-12"placeholder="book search" onChange={props.handleInputChange}></input>
        </div>
    );
}

export default Search;
