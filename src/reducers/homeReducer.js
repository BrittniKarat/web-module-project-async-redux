import { GET_MONSTER } from "../actions/homeActions";

export const initialState = {
    name: 'Kindly Ghost',
    size: 'Tiny',
    armor_class: 0,
    hit_points: 0
}

 const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case GET_MONSTER:
            return {
                ...state,
                name: state.name,
                size: state.size,
                armor_class: state.armor_class,
                hit_points: state.hit_points
            }
        default:
            return state;
    }
}

export default reducer;