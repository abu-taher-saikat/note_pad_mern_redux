import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Noter from '../Image/Noter.png';
import RegisterImage from '../Image/RegisterPage.png';
import './RegisterScreens.css';

const RegisterScreens = () => {

    const handleButton = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Container className="register__screen">
                <Row className="row">
                    <Col className="right__login">
                        <img src={Noter} alt="" srcSet=""/>
                        <Form onSubmit={handleButton}>
                            <Form.Group controlId="formBasicUsername">
                                <input placeholder="Enter you Username" type="text" name="" id="text"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <input placeholder="Email Address" type="email" name="" id="email"/>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                                <input placeholder="password" type="password" name="" id="password"/>
                                <Form.Text className="text-muted">
                                    {/* <Link to="/forgotPassword">Forgot Password</Link>  */}
                                </Form.Text>
                            </Form.Group>

                            <Button variant="outline-dark" type="submit">Register</Button>
                        </Form>

                        <p className="pt-3">Already  a member yet? <Link to="/login">log in Now</Link>  </p>
                    </Col>

                    <Col className="left__login">
                        <img src={RegisterImage} alt="" srcSet=""/>
                        
                        <p className="pb-3 text-center">Note Every Part of your life.</p>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}

export default RegisterScreens;
