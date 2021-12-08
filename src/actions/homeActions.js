export const GET_MONSTER = "GET_MONSTER";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getMonster = () => {
    return ({type: GET_MONSTER});
}

export const fetchSuccess = (monster) => {
    return ({type: FETCH_SUCCESS, payload:monster});
}

export const fetchFail = (error) => {
    return ({type: FETCH_FAIL, payload:error});
}