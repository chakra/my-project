import { ADD_PAYEE, LIST_PAYEE, UPDATE_PAYEE } from '../../constants';

const initialState = { payee: [{ name: 'Chris' }] }

export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PAYEE:
            return {
                payee: [...state.payee, action.payee],
            };
        case UPDATE_PAYEE:
            return {
                payee: state.payee.filter(p => p.name !== action.person.name),
            };
        case LIST_PAYEE:
            return {
                payee: state.payee.filter(p => p.name !== action.person.name),
            };
        default:
            return state;
    }
}