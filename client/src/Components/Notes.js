import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Note from './Note';
import "./Notes.css";

const Notes = () => {
    return (
        <div className="notes">
            <h2 className="heading">notes</h2>
            <Row className="d-flex flex-column">
                <Col>
                    <Note></Note>
                </Col>
                <Col>
                    <Note></Note>
                </Col>
                <Col>
                    <Note></Note>
                </Col>
            </Row>
            <div className="d-flex justify-content-end mr-4 ">
                <Button className="button" variant="outline-primary">Read More</Button>
            </div>
        </div>
    )
}

export default Notes
