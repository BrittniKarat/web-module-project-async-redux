import React, {  useEffect, useReducer } from 'react';
import reducer, { initialState } from '../reducers/homeReducer.js';
import { aquireMonster } from '../actions/homeActions.js';
import { connect } from 'react-redux';


const Home = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { monster, isFetching, error } = props;

    useEffect(() => {
        props.aquireMonster();
    }, [])

    const handleClick = () => {
        props.aquireMonster();
    }

    if(error) {
       return <h2> The monster has declined the invitation to join your adventure. Strange symbols appear:  {error} </h2>;
    }

    if(isFetching) {
       return <h2> What's that?! It looks like a lone... </h2>
    }
    
    return (
        <div>
            <h1> Random Encounter </h1>
            <button onClick={handleClick}> New monster </button>
            <div> 
                <div className='stats'>
                    <h3> {monster.name} </h3>
                    <h4> Type: {monster.type}</h4>
                    <h4> Stats: </h4>
                    <h5> Size: {monster.size} </h5>
                    <h5> Armor Class: {monster.armor_class} </h5>
                    <h5> Hit points: {monster.hit_points} </h5>
                </div>
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

export default connect(mapStateToProps, { aquireMonster })(Home);