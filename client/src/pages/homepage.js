import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron/index"
import { Col, Row, Container } from "../components/Grid";
import Search from "../components/search"
import Results from "../components/Results/index"
import API from "../components/API"



function Home() {
    // Setting our component's initial state
    const [saved, setSaved] = useState(false)

    const handleSave = event => {
        setSaved(true)

        setTimeout(() => {
            setSaved(false)
        }, 2000);
    }

    const [searchTerm, setSearchTerm] = useState("Harry Potter")

    const handleInputChange = event => {
        setSearchTerm(event.target.value)
        console.log(searchTerm)
    }

    const [books, setBooks] = useState([])

    const ApiSearch = () => {
        API.ApiSearch(searchTerm)
            .then(res => {
                console.log(res.data.items)
                setBooks(res.data.items)
            }).catch(err => console.log(err))
    }

    const handleSubmit = event => {
        event.preventDefault()
        ApiSearch()
    }

    useEffect(() => {
        ApiSearch()
    }, [])

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
            </Row>   {saved ?
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

export default Home;
