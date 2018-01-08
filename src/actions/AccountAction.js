import {FETCHING_PAYEE, FETCHING_PAYEE_SUCCESS, FETCHING_PAYEE_FAILURE, FETCHING_ACCOUNT} from './types'

import { connect } from 'react-redux';
import axios from 'react-native-axios';
import Account from "../containers/AccountScreen/Account";

const mapStateToProps = (state) => ({
    isLoading: state.accountReducer.isLoading,
    error: state.accountReducer.error,
    data: state.accountReducer.account
});

const mapDispatchToProps = (dispatch) => ({
    callAccountService: () => dispatch(callWebservice())
})

export const callWebservice = () => {
    return (dispatch) => {
        dispatch(getPayee())
        axios.get(`http://localhost:8088/customer/payees/1`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8"'
            }})
            .then(data => data.json())
            .then(json => {
                console.log('json:', json)
                dispatch(getPayeeSuccess(json.results))
            })
            .catch(err => dispatch(getPayeeFailure(err)))
    }
}

export const getPayee = () => {
    type: FETCHING_ACCOUNT
}

export const getPayeeSuccess = (data) => {
    type: FETCHING_ACCOUNT_SUCCESS,
        data
}

export const getPayeeFailure = () => {
    type: FETCHING_ACCOUNT_FAILURE
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);