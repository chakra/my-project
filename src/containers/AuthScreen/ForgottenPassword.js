import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class ForgottenPassword extends Component {

    render() {
        return (
            <View style={{
                flex: 1, alignSelf: 'stretch',
                paddingTop: 20,
                backgroundColor: '#0D2C4F'}}>
                <Text>ForgottenPassword</Text>
            </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    ForgottenPassword: {
        width: 343
    }
})
