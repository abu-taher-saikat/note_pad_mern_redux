import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Note from "../Components/Note";
import './NotePageScreens.css';


const NotePageScreens = () => {
    return (
        <div className="notepage">
            <h1>welcome back </h1>
            <Row>
                <Col md={4}>
                    <Note></Note>
                </Col>
                <Col md={4}>
                    <Note></Note>
                </Col>
                <Col md={4}>
                    <Note></Note>
                </Col>
                <Col md={4}>
                    <Note></Note>
                </Col>
                <Col md={4}>
                    <Note></Note>
                </Col>
                <Col md={4}>
                    <Note></Note>
                </Col>
                <Col md={4}>
                    <Note></Note>
                </Col>
            </Row>
        </div>
    )
}

export default NotePageScreens
