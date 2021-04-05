import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import Notes from '../Components/Notes';
import Searchbar from '../Components/Serchbar';
import Sidebar from '../Components/Sidebar';
import "./DashboardScreens.css";

const DashboardScreens = () => {
    return (
        <div className="dashboard">
            <Row className="firstRow">
                <Col md={4}>
                    Hello<span className="upper__left"> Saikat, </span> 
                    Welcome back
                </Col>

                <Col md={4}>
                    <Searchbar></Searchbar>
                </Col>

                <Col className="d-flex justify-content-between" md={4}>
                    <div>
                        <h2>Apri 1, 2021</h2>
                        <h6>Thursday</h6> 
                    </div>
                    <div>
                        <AiOutlineAppstoreAdd></AiOutlineAppstoreAdd>
                    </div>
                </Col>
            </Row>
           <Row>
               <Col md={8}>
                   <Notes></Notes>
               </Col>
               <Col md={4}>
                   <Sidebar></Sidebar>
               </Col>
           </Row>
        </div>
    )
}

export default DashboardScreens
