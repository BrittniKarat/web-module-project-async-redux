import App from '../App.js';
import React, {  useReducer } from 'react';
import reducer, { initialState } from '../reducers/homeReducer.js';


const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1> Random Encounter </h1>
            <button> Get a monster </button>
            <div> I'm a monster </div>
        </div>
    )
}

export default Home;