import { FETCHING_PAYEE, FETCHING_PAYEE_SUCCESS, FETCHING_PAYEE_FAILURE } from './types'

import { connect } from 'react-redux';
import axios from 'react-native-axios';

import PayeeList from '../containers/PayeeScreen/PayeeList'

const mapStateToProps = (state) => ({
    isLoading: state.payeeReducer.isLoading,
    error: state.payeeReducer.error,
    data: state.payeeReducer.payee
});

const mapDispatchToProps = (dispatch) => ({
    callPayeeService: () => dispatch(callWebservice())
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
        type: FETCHING_PAYEE
}

export const getPayeeSuccess = (data) => {
        type: FETCHING_PAYEE_SUCCESS,
        data
}

export const getPayeeFailure = () => {
        type: FETCHING_PAYEE_FAILURE
}

export default connect(mapStateToProps, mapDispatchToProps)(PayeeList);