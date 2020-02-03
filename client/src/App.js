import React from 'react';
import { Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';

import './App.css';

import Signup from './components/Signup/Signup';

function App() {
    return (
        <div className='App'>
            <Route exact path='/signup' component={Signup} />
        </div>
    );
}

export default App;
