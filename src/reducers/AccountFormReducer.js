import {
    ACCOUNT_UPDATE, ACCOUNT_CREATE, ACCOUNT_SAVE_SUCCESS
} from '../actions/types';


const INITIAL_STATE = {
    firstname: '',
    lastname: ''
}

const AccountFormReducer = (state = INITIAL_STATE, action) => {

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

export default AccountFormReducer;