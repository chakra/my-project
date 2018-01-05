import React from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import SignUp from "../containers/AuthScreen/Signup";
import SignIn from "../containers/AuthScreen/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import PayeeList from "../containers/PayeeScreen/PayeeList";
import TransactionListView from "../containers/TransactionScreen/TransactionListView";
import Notifications from "../containers/DrawerScreen/Notifications";
import Settings from "../containers/DrawerScreen/Settings";
import ForgottenPassword from "../containers/AuthScreen/ForgottenPassword";

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

/*export const SignedOut = StackNavigator({
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
            headerStyle
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In",
            headerStyle
        }
    }
});*/

/*export const SignedIn = TabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({ tintColor }) =>
                    <FontAwesome name="home" size={30} color={tintColor} />
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon: ({ tintColor }) =>
                    <FontAwesome name="user" size={30} color={tintColor} />
            }
        }
    },
    {
        tabBarOptions: {
            style: {
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
            }
        }
    }
);*/

// drawer stack
const DrawerStack = DrawerNavigator({
    home: { screen: Home },
    notifications: { screen: Notifications },
    transactions: { screen: TransactionListView },
    payees: { screen: PayeeList},
    settings: { screen: Settings},
}, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
})

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#4C3E54'},
        title: 'Welcome!',
        headerTintColor: 'white',
        gesturesEnabled: false,
        headerLeft: drawerButton(navigation)
    })
})

// login stack
const LoginStack = StackNavigator({
    loginScreen: { screen: Login },
    signupScreen: { screen: Signup },
    forgottenPasswordScreen: { screen: ForgottenPassword, navigationOptions: { title: 'Forgot Password' } }
}, {
    headerMode: 'float',
    navigationOptions: {
        headerStyle: {backgroundColor: '#E73536'},
        title: 'You are not logged in',
        headerTintColor: 'white'
    }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack',
    transitionConfig: noTransitionConfig
})

export default PrimaryNav


/*export const createRootNavigator = (signedIn = false) => {
    return StackNavigator(
        {
            SignedIn: {
                screen: SignedIn,
                navigationOptions: {
                    gesturesEnabled: false
                }
            },
            SignedOut: {
                screen: SignedOut,
                navigationOptions: {
                    gesturesEnabled: false
                }
            }
        },
        {
            headerMode: "none",
            mode: "modal",
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};*/
