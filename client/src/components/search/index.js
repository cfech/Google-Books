import React from "react";
import "./style.css";

//Building search component
function Search(props) {
    return (
        <div className="jumbotron mySearch">
            <div className="row">
                <p className="bookSearch">Book Search</p>
            </div>
            <div className="row book">
                <p>Book</p>
            </div>
            <form>
                <input className="col-10" placeholder="book search" onChange={props.handleInputChange}></input>
                <button className="searchBtn" type="submit" onClick={props.handleSubmit}>search</button>
            </form>
        </div>
    );
}

//Exporting search component
export default Search;
