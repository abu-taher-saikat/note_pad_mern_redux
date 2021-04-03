import React from 'react';
import "./Note.css";

const Note = () => {
    return (
        <div className="note">
            <div className="p-4">
                <h2>Books to read</h2>
                <p>Book to read you have to add and contain important things that help you to create and build some importnat things in life</p>

                <div className="timeandcat">
                    <span>1 min read</span>
                    <span>Categories</span>
                </div>
            </div>
        </div>
    )
}

export default Note
