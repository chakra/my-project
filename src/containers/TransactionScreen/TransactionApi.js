import RestClient from 'react-native-rest-client';

export default class TransactionApi extends RestClient {

    constructor () {
        super('http://localhost:8088/transactions', {
            headers: {
                // Include as many custom headers as you need
                //Authorization: `JWT ${authToken}`
                // Content-Type: application/json
                // and
                Accept: application/json
                // are added by default
            },
            // Simulate a slow connection on development by adding
            // a 2 second delay before each request.
            //devMode: __DEV_,
            //simulatedDelay: 2000
        });
    }

    getTransactions() {
        return this.GET("/list/1").then(response => response.json);
    }

};