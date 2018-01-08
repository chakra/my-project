import {
    FETCHING_ADDRESS, FETCHING_ADDRESS_SUCCESS, FETCHING_ADDRESS_FAILURE
} from '../actions/types';

const initialState = {
    payee: [],
    isFetching: false,
    error: false
}

export default  (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_ADDRESS:
            return { ...state, ...initialState, isFetching: true, error:false }
        case FETCHING_ADDRESS_SUCCESS:
            return { ...state, payee:action.data, isFetching: false, error:false}
        case FETCHING_ADDRESS_FAILURE:
            return { ...state, isFetching: false, error:true}
        default:
            return state;
    }
}