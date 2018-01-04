import React, {Component} from 'react';

import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import firebase from "firebase";

import {CardSection, Button, Spinner} from "./common";

export default class LoginForm extends Component<{}> {

    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }


    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput style={styles.input}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Email"
                           returnKeyType="next"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           autoCapitalize="none"
                           autoCorrect={false}
                           keyboardType="email-address"
                />
                <TextInput style={styles.input}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Password"
                           returnKeyType="go"
                           secureTextEntry
                           ref={(input) => this.passwordInput = input}
                />
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D2C4F',
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        marginBottom: 20,
        paddingHorizontal:10
    },
    buttonContainer: {
        backgroundColor: '#0D2C4F',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});