import React from "react";
import BookCard from "../BookCard/index"
import "./style.css";

function Result() {
    return (
        <div className="results col-12">
           <p>results</p>

           <BookCard/>
           <BookCard/>
           <BookCard/>
        </div>
    );
}

export default Result;
