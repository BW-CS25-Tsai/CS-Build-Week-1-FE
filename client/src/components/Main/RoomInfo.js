import React from 'react';

const RoomInfo = ({ player }) => {
    return (
        <div className='info-panel'>
            <p className='title'>{player.title}</p>
            <p className='description'>{player.description}</p>
        </div>
    );
};

export default RoomInfo;
