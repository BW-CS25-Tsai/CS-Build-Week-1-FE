import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBarSignup = props => {
    console.log(props);

    const handleClick = e => {
        e.preventDefault();
        props.history.push('/');
    };

    return (
        <div className='navbar-logout'>
            <div className='nav-content'>
                {/* <div className='nav-logo'>
                    <img src={require('../../assets/')}></img>
                </div> */}
                <div className='mud-name'>
                    <h1>Mud</h1>
                </div>
                <div className='nav-links'>
                    <NavLink
                        onClick={handleClick}
                        to='/'
                        className='nav-link'
                        activeClassName='nav-link-active'
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBarSignup;
