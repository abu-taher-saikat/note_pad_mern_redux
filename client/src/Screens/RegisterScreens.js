import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import Noter from '../Image/Noter.png';
import RegisterImage from '../Image/RegisterPage.png';
import './RegisterScreens.css';


const RegisterScreens = ({location, history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const {loading, error, userInfo} = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history, userInfo, redirect])



    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password))
    }
    return (
        <>
            <Container className="register__screen">
                <Row className="row">
                    <Col className="right__login">
                        <img src={Noter} alt="" srcSet=""/>

                        {error && <Message variant="danger">{error}</Message>}
                        {loading && <Loader></Loader>}

                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="formBasicUsername">
                                <input onChange={(e)=> setName(e.target.value)} placeholder="Enter you Username" type="text" name="" id="text"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <input onChange={(e)=> setEmail(e.target.value)} placeholder="Email Address" type="email" name="" id="email"/>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                                <input onChange={(e)=> setPassword(e.target.value)} placeholder="password" type="password" name="" id="password"/>
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
