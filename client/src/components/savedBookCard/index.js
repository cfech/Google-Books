import React from "react";
import "./style.css";

function SavedBook({ name, author, id, description, link, image, subtitle }) {
    return (
        <div className="BookResults col-12 mb-3">

            <div className="row padL">
                <p>{name}</p>

            </div>

            <div className="row justify-content-end pr-2">

                <form action={link}>
                    <input type="submit" value="View" />
                </form>
                <button className="float-right">Delete</button>
            </div>


            <div className="row padL">
                <p>{
                    subtitle !== undefined && subtitle !== ""
                        ?
                        subtitle
                        :
                        "N/A"
                }</p>

            </div>

            <div className="row padL">
                <p>{author}</p>

            </div>



            <div className="row padL">
                <p>   <img src={image} className="float-left mr-2 col-3 "></img>


                    {description !== undefined
                        ?
                        description
                        :
                        "A book about " + name
                    }
                </p>
            </div>



        </div>
    );
}

export default SavedBook;
