import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../Image/Noter.png';
import "./Header.css";

const Header = () => {
    return (
        <Container className="header">
            <div className="logo">
                <img src={Logo} alt="" srcset=""/>
            </div>
            <div className="right-header">
                <h2>Login / logout</h2>
            </div>
        </Container>
    )
}

export default Header
