import {
    ACCOUNT_UPDATE, FETCHING_ACCOUNT_SUCCESS, FETCHING_ACCOUNT_FAILURE
} from '../actions/types';


const INITIAL_STATE = {
    firstname: '',
    lastname: ''
}

const AccountReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ACCOUNT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case ACCOUNT_CREATE:
            return INITIAL_STATE;
        case ACCOUNT_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }

}

export default AccountReducer;