import React, { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { notesAction } from '../actions/notesActions';
import Note from './Note';
import "./Notes.css";

const Notes = () => {
    const dispatch = useDispatch();
    const notesState = useSelector(state => state.notes);
    const {loading, error, notes} = notesState;

    useEffect(()=>{
        dispatch(notesAction());
    },[dispatch])

    return (
        <div className="notes">
            <h2 className="heading">notes</h2>
            <Row className="d-flex flex-column">
                <Col>
                    <Note loading={loading} error={error} notes={notes}></Note>
                </Col>
            </Row>
            <div className="d-flex justify-content-end mr-4 ">
                <Button href="/notes" className="button mb-2" variant="outline-primary">Read More</Button>
            </div>
        </div>
    )
}

export default Notes
