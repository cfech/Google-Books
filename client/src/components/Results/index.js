import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/index"
import "./style.css";

function Result(props) {

    return (
        <div className="results col-12">
            <h3>Results</h3>
            {props.books.map(item =>
                <BookCard key={item.id} name={item.volumeInfo.title} subtitle={item.volumeInfo.subtitle} description={item.volumeInfo.description} link={item.accessInfo.webReaderLink} author={item.volumeInfo.authors}

                    image={
                        item.volumeInfo.imageLinks !== undefined
                            ?
                            item.volumeInfo.imageLinks.smallThumbnail
                            :
                            "https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg"} 
                            
                            
                handleSave = {props.handleSave}              
                            />
         



            )}


        </div>
    );
}

export default Result;
