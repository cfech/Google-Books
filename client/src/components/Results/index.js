import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/index"
import "./style.css";
import API from "../API"

function Result() {
    const [books, setBooks] = useState([])


    useEffect(() => {
        API.ApiSearch()
            .then(res => {

                console.log(res.data.items)
                setBooks(res.data.items)
            
            }).catch(err => console.log(err))
    }, [])



    return (
        <div className="results col-12">
            <p>results</p>


{books.map (item => 
            <BookCard key = {item.id} name = {item.volumeInfo.title} subtitle = {item.volumeInfo.subtitle} description = {item.volumeInfo.description} image = {item.volumeInfo.imageLinks.thumbnail} link = {item.selfLink} />
)}           
         
        </div>
    );
}

export default Result;
