import {
    FETCHING_ACCOUNT, FETCHING_ACCOUNT_SUCCESS, FETCHING_ACCOUNT_FAILURE
} from '../actions/types';


const initialState = {
    account: {},
    isFetching: false,
    error: false
}

const AccountReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_ACCOUNT:
            return { ...state, ...initialState, isFetching: true, error:false }
        case FETCHING_ACCOUNT_SUCCESS:
            return { ...state, payee:action.data, isFetching: false, error:false}
        case FETCHING_ACCOUNT_FAILURE:
            return { ...state, isFetching: false, error:true}
        default:
            return state;
    }
}

export default AccountReducer;