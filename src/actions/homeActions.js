import axios from "axios";
export const GET_MONSTER = "GET_MONSTER";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const aquireMonster = () => {
    return (dispatch) => {
        dispatch({type: GET_MONSTER});
        const pageNumber = Math.ceil(Math.random() * 22);
        const randMonster = Math.floor(Math.random() * 50);
        axios.get(`https://api.open5e.com/monsters/?page=${pageNumber}`)
            .then(res => { 
                dispatch({type: FETCH_SUCCESS, payload: res.data.results[randMonster]})
            })
            .catch(err => {
                dispatch({type: FETCH_FAIL, payload: err})
            })
    }
}

export const getMonster = () => {
    return ({type: GET_MONSTER});
}

export const fetchSuccess = (monster) => {
    return ({type: FETCH_SUCCESS, payload:monster});
}

export const fetchFail = (error) => {
    return ({type: FETCH_FAIL, payload:error});
}