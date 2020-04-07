import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron/index"
import { Col, Row, Container } from "../components/Grid";
// import Search from "../components/search"
import SavedResults from "../components/savedResults/index"


function Saved() {


    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron />
                </Col>
            </Row>
            <SavedResults />
        </Container>
    );
}


export default Saved;
