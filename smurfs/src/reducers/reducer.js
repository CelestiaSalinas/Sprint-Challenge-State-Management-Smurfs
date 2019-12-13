import {
    ERROR,
    GET_SMURFS ,
    GET_SMURFS_SUCCESS,
    CREATE_SMURF
  } from '../actions/actions';
  


const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                isFetching: true };

        case GET_SMURFS_SUCCESS:
            return { 
                ...state, 
                smurfs: action.payload, 
                isFetching: false,
                error: '' 
            };

        case CREATE_SMURF:
            return { 
                ...state, 
                smurfs: action.payload };

        case ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            };
            default:
                return state;
    }
};