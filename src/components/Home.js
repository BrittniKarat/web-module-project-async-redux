import App from '../App.js';
import React, {  useReducer } from 'react';
import reducer, { initialState } from '../reducers/homeReducer.js';
import { getMonster, fetchSuccess, fetchFail } from '../actions/homeActions.js';
import { connect } from 'react-redux';
import axios from 'axios';


const Home = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { monster, isFetching, error } = props;

    if(error) {
       return <h2> The monster has declined the invitation to join your adventure. Strange symbols appear:  {error} </h2>;
    }

    if(isFetching) {
       return <h2> What's that?! It looks like a lone... </h2>
    }
    
    const handleClick = () => {
        props.getMonster();
        const pageNumber = Math.ceil(Math.random() * 22);
        const randMonster = Math.ceil(Math.random() * 50);
        axios.get(`https://api.open5e.com/monsters/?page=${pageNumber}`)
            .then(res => { 
                 props.fetchSuccess(res.data.results[randMonster]
                    )}
            )
            .catch(err => {
                props.fetchFail(err)
            })
    }

    // console.log(res.data.results[randMonster]),

    return (
        <div>
            <h1> Random Encounter </h1>
            <button onClick={handleClick}> New monster </button>
            <div> 
                <h3> {monster.name} </h3>
                <h4> Type: {monster.type}</h4>
                <h4> Stats: </h4>
                <h5> Size: {monster.size} </h5>
                <h5> Armor Class: {monster.armor_class} </h5>
                <h5> Hit points: {monster.hit_points} </h5>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        monster: state.monster,  
        isFetching: state.isFetching,
        error: state.error  
    })
};

export default connect(mapStateToProps, { getMonster, fetchSuccess, fetchFail })(Home);