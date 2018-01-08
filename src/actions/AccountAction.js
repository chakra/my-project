import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    ACCOUNT_UPDATE,
    ACCOUNT_CREATE,
    FETCHING_ACCOUNT_SUCCESS,
    ACCOUNT_SAVE_SUCCESS
} from './types';

export const accountUpdate = ({ prop, value }) => {
    return {
        type: ACCOUNT_UPDATE,
        payload: { prop, value }
    };
};

export const accountCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/accounts`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: ACCOUNT_CREATE });
                Actions.accountList({ type: 'reset' });
            });
    };
};

export const accountsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/accounts`)
            .on('value', snapshot => {
                dispatch({ type: FETCHING_ACCOUNT_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const accountSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/accounts/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: ACCOUNT_SAVE_SUCCESS });
                Actions.accountList({ type: 'reset' });
            });
    };
};

export const accountDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.accountsList({ type: 'reset' });
            });
    };
};