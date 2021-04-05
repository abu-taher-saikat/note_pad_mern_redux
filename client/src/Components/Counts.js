import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Counts = () => {
    return (
        <>
            <div>
                <Row className="counts">
                    <Col>
                        <div className="number">7</div>
                        <div className="types">Notes</div>
                    </Col>
                        <div className="vl"></div>
                    <Col>
                        <div className="number">3</div>
                        <div className="types">This month</div>
                    </Col>
                        <div className="vl"></div>
                    <Col>
                        <div className="number">9</div>
                        <div className="types">Categories</div>
                    </Col>
                </Row>

            </div>   
        </>
    )
}

export default Counts
