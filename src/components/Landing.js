import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

import Rectangle4 from './Landing_images/Rectangle4.png'
import Line from './Landing_images/Line.png'
import Line_5 from './Landing_images/Line_5.png'
import Rectangle4_8 from './Landing_images/Rectangle4_8.png'

export default class Landing extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#0D2C4F'}}>
        <View style={styles.Landing}>
          <Text style={styles.Bubble}>Bubble</Text>
          <Image source={Rectangle4} style={styles.Rectangle4} />
            <Text style={styles.Register}>Register</Text>
          </Image>
          <View style={{flexDirection: 'row'}}>
            <Image source={Line} style={styles.Line} />
            <Text style={styles.OR}>OR</Text>
            <Image source={Line_5} style={styles.Line_5} />
          </View>
          <Image source={Rectangle4_8} style={styles.Rectangle4_8} />
            <Text style={styles.Login}>Login</Text>
          </Image>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  Landing: {
    width: 318
  },
  Bubble: {
    backgroundColor: 'transparent',
    fontSize: 57,
    fontWeight: 'bold',
    color: '#FAFAFA',
    alignSelf: 'center',
    textAlign: 'center'
  },
  Rectangle4: {
    backgroundColor: '#0D2C4F',
    alignSelf: 'center',
    marginTop: 132,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Register: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Line: {

  },
  OR: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FBFBFB',
    textAlign: 'center'
  },
  Line_5: {

  },
  Rectangle4_8: {
    backgroundColor: '#0D2C4F',
    alignSelf: 'center',
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Login: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
