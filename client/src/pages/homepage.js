import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron/index"
import { Col, Row, Container } from "../components/Grid";
import Search from "../components/search"
import Results from "../components/Results/index"
import API from "../components/API"

//Homepage Component
function Home() {
    //Creating saved hook
    const [saved, setSaved] = useState(false)

    // Handling saving an item
    const handleSave = event => {
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 2000);
    }

    //Creating search term hook
    const [searchTerm, setSearchTerm] = useState("Harry Potter")

    //Handling input change and setting search term 
    const handleInputChange = event => {
        setSearchTerm(event.target.value)
    }

    //Creating books state
    const [books, setBooks] = useState([])


    //Function to call the google books api and setting the books to the the response of the api
    const ApiSearch = () => {
        API.ApiSearch(searchTerm)
            .then(res => {
                console.log(res.data.items)
                setBooks(res.data.items)
            }).catch(err => console.log(err))
    }

    //Handling the submit button onClick event to call the google books api 
    const handleSubmit = event => {
        event.preventDefault()
        ApiSearch()
    }

    //Calling the api search onload to display an initial search result 
    useEffect(() => {
        ApiSearch()
    }, [])

    //Homepage component 
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron className="m-2" />
                </Col>
            </Row>

            <Row>
                <Col size="md-12">
                    <Search handleInputChange={handleInputChange} searchTerm={searchTerm} handleSubmit={handleSubmit} />
                </Col>
            </Row>
            
            {saved ?
                <div className="alert alert-success " role="alert">
                    Saved!
                </div>
                :
                null
            }
            
            <Results books={books} handleSave={handleSave} />
        </Container>
    );
}

//Exporting Home component
export default Home;
