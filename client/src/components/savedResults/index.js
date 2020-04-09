import React from "react";
import SavedBookCard from "../savedBookCard/index"
import "./style.css";

//Building savedResult component
function SavedResult(props) {
    return (
        <div className="savedResults col-12">
            <h3>Results</h3>
            {props.savedBooks.map(item => {
                return <SavedBookCard key={item._id} id={item._id} name={item.name} subtitle={item.subtitle} image={item.image} author={item.author} description={item.description} link={item.link} />
            })
            }
        </div>
    );
}

//Exporting saved result component
export default SavedResult;
