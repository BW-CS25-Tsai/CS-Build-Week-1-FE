// import React from 'react';
// import NavBarLogin from '../Nav/NavBarLogin';
// import NavBarLogout from '../Nav/NavBarLogout';
// import NavBarSignup from '../Nav/NavBarSignup';
// import NavBarAbout from '../Nav/NavBarAbout';
// import '../NavBar.css';

// function Main() {
//     return <div>The main page content should be here...</div>;
// }
import styled from 'styled-components';
import useMaze from '../Main/Map';
import Map from '../Main/Map'
import Dashboard from '../Main/RoomInfo';
import React from 'react';
import { withRouter } from 'react-router-dom';

export const GameContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GameArena = styled.section`
    width: 50vw;
    position: relative;
    display: grid;
    grid-template: ${({ width, height }) =>
        `repeat(${width}, 2.5vmin) / repeat(${height}, 2.5vmin)`};
    justify-content: center;
    justify-self: center;
    align-self: center;
    box-shadow: 0 2rem 2rem -2rem rgba(0, 0, 0, 0.24);
    border: 2px solid green;
    @media (min-width: 90rem) {
        grid-template: ${({ width, height }) =>
            `repeat(${width}, 1.5rem) / repeat(${height}, 1.5rem)`};
    }
`;

const Game = ({ history }) => {
    const { x, y, maze, loaded, directions } = useMaze();

    return (
   
       <Dashboard directions={directions} history={history}  />
       <Map />
  
    );
};

export default withRouter(Game);
