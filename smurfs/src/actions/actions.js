import axios from 'axios'

export const ERROR = 'ERROR';
export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const CREATE_SMURF = 'CREATE_SMURF';


export const getSmurf = () => dispatch => {
    dispatch({ type: GET_SMURFS });
    axios.get('http://localhost:3333/smurfs')
    .then(res => 
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res })
        )
        .catch(err => dispatch({ type: ERROR, payload: err }));
    }

export const createSmurf = (post) => dispatch => {
    axios.post('http://localhost:3333/smurfs', post)
    .then(res => 
        dispatch({ type: CREATE_SMURF, payload: res.data })
        )
        .catch(err => console.log( err ));
    }