import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions';
import LoginImage from '../Image/loginPage.png';
import Noter from '../Image/Noter.png';
import './LoginScreens.css';


const LoginScreens = ({history, location}) => {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();



    const userLogin = useSelector((state) => state.userLogin);
    const {loading, error, userInfo} = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/dashboard'
    useEffect(()=> {
        if(userInfo){
            history.push(redirect)
        }
    },[history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
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
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="formBasicEmail">
                                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" type="email" name="" id="email"/>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                                <input onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" name="" id="password"/>
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
