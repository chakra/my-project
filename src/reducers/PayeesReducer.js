import {
    FETCHING_PAYEE, FETCHING_PAYEE_SUCCESS, FETCHING_PAYEE_FAILURE
} from '../actions/types';


const initialState = {
    payee: [],
    isFetching: false,
    error: false
}

const PayeesReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_PAYEE:
            return { ...state, ...initialState, isFetching: true, error:false }
        case FETCHING_PAYEE_SUCCESS:
            return { ...state, payee:action.data, isFetching: false, error:false}
        case FETCHING_PAYEE_FAILURE:
            return { ...state, isFetching: false, error:true}
        default:
            return state;
    }
}

export default PayeesReducer;

