import React from "react";
import SavedBookCard from "../savedBookCard/index"
import "./style.css";

function SavedResult(props) {




    return (
        <div className="savedResults col-12">
            <p>Results</p>
            {props.savedBooks.map(item => {
                return <SavedBookCard key = {item._id} name = {item.name} subtitle= {item.subtitle} image = {item.image} author = {item.author} description = {item.description} link= {item.link}/>
            })
            }
        </div>
    );
}

export default SavedResult;
