import { FETCHING_TRANSACTION, FETCHING_TRANSACTION_SUCCESS, FETCHING_TRANSACTION_FAILURE } from './types'

export function fetchTransationFromAPI() {
    return (dispatch) => {
        dispatch(getTransaction())
        fetch(`http://localhost:8088/customer/payees/1`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8"'
            }})
            .then(data => data.json())
            .then(json => {
                console.log('json:', json)
                dispatch(getTrasactionSuccess(json.results))
            })
            .catch(err => dispatch(getTransactionFailure(err)))
    }
}

export function getTransaction() {
    return {
        type: FETCHING_TRANSACTION
    }
}

export function getTrasactionSuccess(data) {
    return {
        type: FETCHING_TRANSACTION_SUCCESS,
        data,
    }
}

export function getTransactionFailure() {
    return {
        type: FETCHING_TRANSACTION_FAILURE
    }
}
