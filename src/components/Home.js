import App from '../App.js';
import React, {  useReducer } from 'react';
import reducer, { initialState } from '../reducers/homeReducer.js';
import { getMonster, fetchSuccess, fetchFail } from '../actions/homeActions.js';
import { connect } from 'react-redux';
import axios from 'axios';


const Home = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { monster, isFetching, error, fetchSuccess, fetchFail } = props;

    if(error) {
       return <h2> The monster has declined the invitation to join your adventure. </h2>;
    }

    if(isFetching) {
       return <h2> With your perception, you see something coming towards you. What's that?! It looks like a lone... </h2>
    }

    console.log(monster)

    

    const handleClick = () => {
        props.getMonster();
        const pageNumber = Math.ceil(Math.random() * 22);
        const randMonster = Math.ceil(Math.random() * 50);
        axios.get(`https://api.open5e.com/monsters/?page=${pageNumber}`)
            .then(res => 
            props.fetchSuccess(res.data.results[randMonster])
            )
            .catch(err => console.error(err))
    }

    // console.log(res.data.results[randMonster]),

    return (
        <div>
            <h1> Random Encounter </h1>
            <button onClick={handleClick}> Get a monster </button>
            <div> 
                <h3> {monster.name} </h3>
                <h4> Stats: </h4>
                <h4> {monster.size} </h4>
                <h4> {monster.armor_class} </h4>
                <h4> {monster.hit_points} </h4>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        person: state.monster,  
        isFetching: state.isFetching,
        error: state.error  
    })
};

export default connect(mapStateToProps, { getMonster, fetchSuccess, fetchFail })(Home);