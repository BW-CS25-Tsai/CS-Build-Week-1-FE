// import React, { useEffect, useState } from 'react';
// import NavBarLogout from '../Nav/NavBarLogout';
// import { axiosWithAuth } from '../../utils/axiosWithAuth';
// import Player from './Player';
// import RoomInfo from './RoomInfo'

// import Controls from './Controls';
// import Display from './Display';

// const Game = props => {
//     const [rooms, setRooms] = useState([]);
//     const [player, setPlayer] = useState({ room_id: 289 });
//     const [playerRoom, setPlayerRoom] = useState(1);

//     const movePlayer = direction => {
//         axiosWithAuth()
//             // .post(    , {
//                 direction
//             })
//             .then(res => {
//                 console.log('response', res.data);
//                 console.log('player position on state', playerRoom);
//                 console.log('update player position here');

//                 setPlayerRoom(res.data.room_id);
//             })
//             .catch(err => {
//                 console.log(err);

//             });
//     };

//     useEffect(() => {
//         axiosWithAuth()
//             // .get(')
//             .then(res => {
//                 setRooms(res.data.rooms);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }, []);

//     useEffect(() => {
//         console.log('second use effect');
//         axiosWithAuth()
//             // .get(')
//             .then(res => {
//                 console.log('successful response');
//                 setPlayer(res.data);
//                 setPlayerRoom(res.data.room_id);
//                 console.log('HERE is response from INIT:', res.data);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }, [playerRoom]);

//     const sortedRooms = rooms.sort((a, b) => {
//         return a.pos_x - b.pos_x;
//     });

//     console.log('sorted rooms:', sortedRooms);

//     return (
//         <>
//             <NavBarLogout {...props} />
//             <div className='display'>
//                 <Display rooms={rooms} playerRoom={playerRoom} />
//                 <RoomInfo player={player} />
//                 <Controls move={movePlayer} />
//             </div>
//         </>
//     );
// };
