import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron/index"
import { Col, Row, Container } from "../components/Grid";
// import Search from "../components/search"
import SavedResults from "../components/savedResults/index"
import Api from "../utils/API"


function Saved() {
const [savedBooks , setSavedBooks]= useState([])

    useEffect(() => {

        Api.getBooks().then(({ data }) => {
            console.log(data)
            setSavedBooks(data)
        }).catch(err => console.log(err))
    },[])


    

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron />
                </Col>
            </Row>
            <SavedResults savedBooks={savedBooks}/>
        </Container>
    );
}


export default Saved;
