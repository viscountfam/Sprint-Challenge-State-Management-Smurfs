import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_FAILURE,
    POSTING_SMURFS_START,
    POSTING_SMURFS_SUCCESS,
    POSTING_SMURFS_FAILURE
} from '../actions'


const initialState = {
    isLoading: false,
    smurfArray: [{
        "name": "TESTCASE",
        "age": 234,
        "height": "7cm",
        "id": 5301
    }],
    error: '',
    postError: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfArray: action.payload
            }
        case FETCHING_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POSTING_SMURFS_START:
            return {
                ...state,
                isLoading: true
            }
        case POSTING_SMURFS_SUCCESS:
            console.log("New Smurf added")
            return state
        case POSTING_SMURFS_FAILURE:
            return {
                ...state,
                postError: action.payload
            }
        default:
            return state
    }
}