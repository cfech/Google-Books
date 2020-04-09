import React from "react";
import "./style.css";
import Api from "../../utils/API"
import { PromiseProvider } from "mongoose";

function BookCard({ name, subtitle, author, image, description, link, handleSave }) {

    const handleSubmit = event => {
        event.preventDefault()
        Api.saveBook({
            name, subtitle, author, image, description, link
        }).then(() => {
            handleSave()
        })
    }

    return (
        <div className="BookResults col-12 mb-3">






            <div className="row padL">
                <h4>{name}</h4>
            </div>

            <div className="row justify-content-end pr-2">
                <form action={link} className="viewBtn">
                    <input type="submit" value="View" />
                </form>


                <form className="viewBtn">
                    <input type="submit" value="Save" onClick={handleSubmit} />
                </form>
                {/* <button className="saveBtn" onClick={handleSubmit}>Save</button> */}
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
                <h6 className="authorName">{author}</h6>
            </div>

            <div className="row padL">
                <p className="description">    <img src={image} className="float-left mr-2 col-3 "></img>


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

export default BookCard;
