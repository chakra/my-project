import { FETCHING_PAYEE, FETCHING_PAYEE_SUCCESS, FETCHING_PAYEE_FAILURE } from './types'

export function fetchPayeeFromAPI() {
    return (dispatch) => {
        dispatch(getPayee())
        fetch(`http://localhost:8088/customer/payees/1`, {
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

export function getPayee() {
    return {
        type: FETCHING_PAYEE
    }
}

export function getPayeeSuccess(data) {
    return {
        type: FETCHING_PAYEE_SUCCESS,
        data,
    }
}

export function getPayeeFailure() {
    return {
        type: FETCHING_PAYEE_FAILURE
    }
}
