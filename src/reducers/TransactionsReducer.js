
import {
    FETCHING_TRANSACTION, FETCHING_TRANSACTION_FAILURE, FETCHING_TRANSACTION_SUCCESS
} from '../actions/types';


const initialState = {
    payee: [],
    isFetching: false,
    error: false
}

export default  (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_TRANSACTION:
            return { ...state, ...initialState, isFetching: true, error:false }
        case FETCHING_TRANSACTION_SUCCESS:
            return { ...state, payee:action.data, isFetching: false, error:false}
        case FETCHING_TRANSACTION_FAILURE:
            return { ...state, isFetching: false, error:true}
        default:
            return state;
    }
}