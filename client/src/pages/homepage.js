import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron/index"
import { Col, Row, Container } from "../components/Grid";
import Search from "../components/search"
import Results from "../components/Results/index"
import API from "../components/API"



function Home() {
    // Setting our component's initial state

    // componentDidMount() {
    //     API.ApiSearch()
    //         .then(res => {

    //             console.log(res.data.items)
    //         }).catch(err => console.log(err))
    // }
    const [searchTerm, setSearchTerm] = useState("")


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
    // useEffect(() => {

    // },[])



    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron />
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Search handleInputChange={handleInputChange}  searchTerm={searchTerm} handleSubmit={handleSubmit} />
                </Col>
            </Row>

            <Results books={books}/>



        </Container>
    );
}



export default Home;
