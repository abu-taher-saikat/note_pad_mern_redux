import React from 'react';
import profileImg from '../Image/img.jpg';
import "./ProfileBoard.css";

const ProfileBoard = () => {
    return (
        <div className="profile">
            <div className="profile-img mt-4 mb-4">
                <img src={profileImg} alt=""/>
            </div>
            <h3>Abu Taher Saikat</h3>
            <p>mdabutahersaikat@gmail.com</p>
        </div>
    )
}

export default ProfileBoard
