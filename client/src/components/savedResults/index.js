import React from "react";
import SavedBookCard from "../savedBookCard/index"
import "./style.css";

function SavedResult() {
    return (
        <div className="results col-12">
           <p>results</p>

           <SavedBookCard/>
           <SavedBookCard/>
           <SavedBookCard/>
        </div>
    );
}

export default SavedResult;
