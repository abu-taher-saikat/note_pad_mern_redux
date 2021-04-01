import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginImage from '../Image/loginPage.png';
import Noter from '../Image/Noter.png';
import './LoginScreens.css';

const LoginScreens = () => {

    const handleButton = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Container className="login__screen">
                <Row className="row">
                    <Col className="left__login">
                        <img src={LoginImage} alt="" srcSet=""/>
                        <p className="pt-4">Welcome back to <span className="noter">Noter</span> .</p>
                        <p className="pb-3">Sign in to continue your account.</p>
                    </Col>

                    <Col className="right__login">
                        <img src={Noter} alt="" srcSet=""/>
                        <Form onSubmit={handleButton}>
                            <Form.Group controlId="formBasicEmail">
                                <input placeholder="Email Address" type="email" name="" id="email"/>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                                <input placeholder="password" type="password" name="" id="password"/>
                                <Form.Text className="text-muted">
                                    <Link to="/forgotPassword">Forgot Password</Link> 
                                </Form.Text>
                            </Form.Group>

                            <Button variant="outline-dark" type="submit">Login</Button>
                        </Form>

                        <p className="pt-3">Not a member yet? <Link to="/register">Register Now</Link>  </p>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}

export default LoginScreens
