import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
    return (
        <Container fluid>
            <Row fluid>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Google Books Search</h1>
                        <p>Serach for and Save Books of Interest</p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;