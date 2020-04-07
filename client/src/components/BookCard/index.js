import React from "react";
import "./style.css";

function BookCard({ name, subtitle, author, image, description, link}) {
    return (
        <div className="BookResults col-12 mb-3">

            <div className="row padL">
                <p>{name}</p>
            </div>

            <div className="row justify-content-end pr-2">
                <form action={link}>
                    <input type="submit" value="View" />
                </form>
                <button className="float-right">Save</button>
            </div>

            <div className="row padL">
                <p>{subtitle}</p>
            </div>

            <div className="row padL">
                <p>{author}</p>
            </div>

            <div className="row padL">
                <p>   <img src={image} className="float-left mr-2 col-3 "></img>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default BookCard;
