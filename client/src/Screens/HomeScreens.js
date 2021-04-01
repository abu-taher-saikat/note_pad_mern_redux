import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HomeScreenImage from "../Image/HomePage.png";
import "./HomeScreens.css";

const HomeScreens = () => { 
    return (
        <>
            <Container fluid>
                <div className="p-4">
                    <h5 className="homepage_text">Welcome to Noter</h5>
                    <h5 className="homepage_text">Note your Everyday life</h5>
                </div>
            </Container> 
            <Container className="home_screen">
                <Row>
                    <Col className="left-col">
                        <Button className="login-button" href="/login" variant="outline-light">
                                Login
                        </Button>
                        <span className="text-center py-3">or</span>

                        <Button className="register-button" href="/register" variant="outline-light">
                                Register
                        </Button>
                    </Col>
                    <Col> 
                        <img src={HomeScreenImage} alt="" />  
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeScreens
