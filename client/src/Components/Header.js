import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../Image/Noter.png';
import "./Header.css";

const Header = () => {
    return (
        <Container className="header">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="right-header">
                <h2>Login / logout</h2>
            </div>
        </Container>
    )
}

export default Header
