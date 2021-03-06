import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    KeyboardAvoidingView,
    AsyncStorage
} from "react-native";


export default class Signup extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation: ""
        };
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#16a085",
            elevation: null
        }
    };

    async onRegisterPress() {
        const { email, password } = this.state;
        console.log(email);
        console.log(password);
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("password", password);
        this.props.navigation.navigate("Boiler");
    }

    render() {
        return (
            <View behavior="padding" style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image source={require('../../../Login_images/Logo.jpg')}/>
                </View>
                <KeyboardAvoidingView>
                    <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        style={styles.input}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        ref={input => (this.emailInput = input)}
                        onSubmitEditing={() => this.passwordCInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Email"
                    />
                    <TextInput
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        ref={input => (this.passwordCInput = input)}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        returnKeyType="next"
                    />
                    <TextInput
                        value={this.state.password}
                        onChangeText={password_confirmation => this.setState({ password_confirmation })}
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="go"
                        ref={input => (this.passwordInput = input)}
                    />
                </KeyboardAvoidingView>
                <TouchableHighlight
                    onPress={this.onRegisterPress.bind(this)}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1.2,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#0D2C4F",
        padding: 20,
        paddingTop: 100
    },
    logoContainer: {
        alignItems:'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 150
    },
    input: {
        height: 40,
        width: 350,
        marginBottom: 10,
        backgroundColor: "rgba(255,255,255,0.2)",
        color: "#fff",
        paddingHorizontal: 10
    },
    button: {
        height: 50,
        backgroundColor: "rgba(255,255,255,0.2)",
        alignSelf: "stretch",
        marginTop: 10,
        justifyContent: "center",
        paddingVertical: 15,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 18,
        alignSelf: "center",
        textAlign: "center",
        color: "#FFF",
        fontWeight: "700"
    },
    subtext: {
        color: "#ffffff",
        width: 160,
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold",
        marginTop: 20
    }
});

AppRegistry.registerComponent("Signup", () => Signup);