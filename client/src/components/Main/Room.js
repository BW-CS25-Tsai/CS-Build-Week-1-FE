import React from 'react';

const Room = ({ room, player }) => {
    return (
        <div className='gridsquare'>
            <div className={player ? 'player' : 'room'}></div>
        </div>
    );
};

export default Room;
