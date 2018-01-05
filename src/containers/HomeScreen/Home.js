import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {Button} from "../../components/common/index";


export default class Home extends Component {

  render() {
    return (
      <View style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#0D2C4F'}}>
        <View style={styles.Home}>
            <Text style={styles.Todaysrate}>Today’s rate {'\n'}</Text>
            <Text style={styles.Todaysrate825}>82.5</Text>
            <Button>Send Money</Button>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  Home: {
    width: 343
  },
  Todaysrate: {
    marginTop:'50%',
    marginLeft:'25%',
    fontSize: 30
  },
  Todaysrate825: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  SendMoney: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
