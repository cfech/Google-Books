import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron/index"
import { Col, Row, Container } from "../components/Grid";
import Search from "../components/search"
import Results from "../components/Results/index"
import API from "../components/API"


class Home extends React.Component {
    // Setting our component's initial state

    // componentDidMount() {
    //     API.ApiSearch()
    //         .then(res => {
                
    //             console.log(res.data.items)
    //         }).catch(err => console.log(err))
    // }



render(){

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron />
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Search />
                </Col>
            </Row>

            <Results />



        </Container>
    );
}
}


export default Home;
