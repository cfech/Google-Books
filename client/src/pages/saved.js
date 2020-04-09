import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron/index"
import { Col, Row, Container } from "../components/Grid";
import SavedResults from "../components/savedResults/index"
import Api from "../utils/API"


function Saved() {
    const [savedBooks, setSavedBooks] = useState([])
    useEffect(() => {
        Api.getBooks().then(({ data }) => {
            console.log(data)
            setSavedBooks(data)
        }).catch(err => console.log(err))
    }, [])

    //Building saved page
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron />
                </Col>
            </Row>
            <SavedResults savedBooks={savedBooks} />
        </Container>
    );
}

//Exporting saved page
export default Saved;
