import React from 'react';
import { Badge } from 'react-bootstrap';
import "./TopCategories.css";

const TopCategories = () => {
    return (
        <div className="topCategories">
            <h6 className="text-center">Top Categories</h6>

            <div>
                <Badge variant="info">Categories</Badge>
                <Badge variant="dark">books</Badge>
                <Badge variant="danger">studyes</Badge>
                <Badge variant="dark">walking</Badge>
                <Badge variant="info">havings</Badge>
                <Badge variant="dark">Categories</Badge>
                <Badge variant="dark">Categories</Badge>
            </div>
        </div>
    )
}

export default TopCategories
