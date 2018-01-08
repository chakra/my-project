import { FETCHING_ADDRESS, FETCHING_ADDRESS_SUCCESS, FETCHING_ADDRESS_FAILURE } from './types'

export function fetchAddressFromAPI() {
    return (dispatch) => {
        dispatch(getAddress())
        fetch(`http://localhost:8088/customer/payees/1`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8"'
            }})
            .then(data => data.json())
            .then(json => {
                console.log('json:', json)
                dispatch(getAddressSuccess(json.results))
            })
            .catch(err => dispatch(getAddressFailure(err)))
    }
}

export function getAddress() {
    return {
        type: FETCHING_ADDRESS
    }
}

export function getAddressSuccess(data) {
    return {
        type: FETCHING_ADDRESS_SUCCESS,
        data,
    }
}

export function getAddressFailure() {
    return {
        type: FETCHING_ADDRESS_FAILURE
    }
}