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
            <form>
            <input className = "col-10"placeholder="book search" onChange={props.handleInputChange}></input>
            <button className = "searchBtn" type= "submit" onClick = {props.handleSubmit}>search</button>
            </form>
        </div>
    );
}

export default Search;
