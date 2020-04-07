import React from "react";
import "./style.css";

function SavedBook() {
    return (
        <div className="BookResults col-12 mb-3">

            <div className="row padL">
                <p>name</p>
              
            </div>

            <div className="row justify-content-end pr-2">
                
                <button className="float-right">View</button>
                <button className="float-right">Delete</button>
            </div>


            <div className="row padL">
                <p>short description</p>

            </div>

            <div className="row padL">
                <p>author</p>

            </div>



            <div className="row padL">
                <p>   <img src=" https://via.placeholder.com/150" className="float-left mr-2 col-3 "></img>


                    description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description
                </p>
            </div>



        </div>
    );
}

export default SavedBook;
