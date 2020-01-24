import axios from 'axios'


export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const POSTING_SMURFS_START = 'POSTING_SMURF_START';
export const POSTING_SMURFS_SUCCESS = 'POSTING_SMURF_SUCCESS';
export const POSTING_SMURFS_FAILURE = 'POSTING_SMURF_SUCCESS';
export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START});
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("Smurfs API response", res )
            dispatch({type: FETCHING_SMURFS_SUCCESS, payload: res.data})
        })
        .catch( err => {
            dispatch({type: FETCHING_SMURFS_FAILURE, payload: err.response})
        })
}

export const PostSmurfs = (newSmurf) => dispatch => {
    dispatch({ type: POSTING_SMURFS_START, payload: newSmurf });
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            console.log("Successful post, new Smurf added", res)
            dispatch({type: POSTING_SMURFS_SUCCESS})
        })
        .catch(err => {
            console.log(err.response) 
            dispatch({type: POSTING_SMURFS_FAILURE, payload: err.response})
        })

}