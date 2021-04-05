import React from 'react';
import Counts from './Counts';
import ProfileBoard from './ProfileBoard';
import TopCategories from './TopCategories';

const Sidebar = () => {
    return (
        <div>
            <ProfileBoard></ProfileBoard>
            <Counts></Counts>
            <TopCategories></TopCategories>
        </div>
    )
}

export default Sidebar
