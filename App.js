import React, {Component} from 'react';
import Login from './src/containers/AuthScreen/Login';
import firebase from "firebase";

import { Font } from 'expo';

import {StyleSheet, View} from 'react-native';
import { Header, Button, Spinner } from './src/components/common';
import Signup from "./src/containers/AuthScreen/Signup";
import TransactionListView from "./src/containers/TransactionScreen/TransactionListView";
import PayeeList from "./src/containers/PayeeScreen/PayeeList";
import Home from "./src/containers/HomeScreen/Home";
import Test from "./src/containers/TransactionScreen/Test";

export default class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        Font.loadAsync({
            'Gurumukhi MN': require('./assets/fonts/Gurmukhi-Normal.ttf'),
        });

        firebase.initializeApp({
            apiKey: 'AIzaSyDkx609AlLiQ9YaC2CLI2zBa6Gz9UYGfUw',
            authDomain: 'awesome-2346a.firebaseapp.com',
            databaseURL: 'https://awesome-2346a.firebaseio.com',
            projectId: 'awesome-2346a',
            storageBucket: 'awesome-2346a.appspot.com',
            messagingSenderId: '771713485581'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <TransactionListView />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D2C4F'
    }}
);



