import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/index"
import "./style.css";
import API from "../API"
import Axios from "axios";

function Result() {
    const [books, setBooks] = useState([])

    // var searchTerm = "cook"

    // const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;



    // ApiSearch(() =>{
    //     Axios.get(url)
    //     .then(res =>{
    //         console.log(res.data.items)
    //         setBooks(res.data.items)
    //     }).catch(err=> console.log(err))
    // })

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
            {books.map(item =>
                <BookCard key={item.id} name={item.volumeInfo.title} subtitle={item.volumeInfo.subtitle} description={item.volumeInfo.description} link={item.selfLink}
                    image={
                        item.volumeInfo.imageLinks !== undefined
                            ?
                            item.volumeInfo.imageLinks.thumbnail
                            :
                            "https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg" }/>
            )}
        </div>
    );
}

export default Result;
