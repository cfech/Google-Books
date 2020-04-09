import React from "react";
import "./style.css";
import Api from "../../utils/API"

function SavedBook({ name, author, id, description, link, image, subtitle }) {

    const handleSubmit = event => {
        
        console.log(id)
        Api.deleteBook(id)
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
                    <input type="submit" value="Delete" onClick={handleSubmit} />
                </form>

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
                <h5>{author}</h5>
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
