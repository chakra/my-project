import { FETCHING_ACCOUNT, FETCHING_ACCOUNT_SUCCESS, FETCHING_ACCOUNT_FAILURE } from './types'

export function fetchAccountFromAPI() {
    return (dispatch) => {
        dispatch(getAccount())
        fetch(`http://localhost:8088/customer/payees/1`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8"'
            }})
            .then(data => data.json())
            .then(json => {
                console.log('json:', json)
                dispatch(getAccountSuccess(json.results))
            })
            .catch(err => dispatch(getAccountFailure(err)))
    }
}

export function getAccount() {
    return {
        type: FETCHING_ACCOUNT
    }
}

export function getAccountSuccess(data) {
    return {
        type: FETCHING_ACCOUNT_SUCCESS,
        data,
    }
}

export function getAccountFailure() {
    return {
        type: FETCHING_ACCOUNT_FAILURE
    }
}