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

import Rectangle from './Login_images/Rectangle.png'
import Rectangle_11 from './Login_images/Rectangle_11.png'
import Rectangle_13 from './Login_images/Rectangle_13.png'
import Rectangle4 from './Login_images/Rectangle4.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch',
        paddingTop: 20,
        backgroundColor: '#0D2C4F'}}>
        <View style={styles.Login}>
          <Text style={styles.Bubble}>Bubble</Text>
          <Image source={Rectangle} style={styles.Rectangle} />
            <Text style={styles.Email}>Email</Text>
          </Image>
          <Image source={Rectangle_11} style={styles.Rectangle_11} />
            <Text style={styles.Password}>Password</Text>
          </Image>
          <Image source={Rectangle_13} style={styles.Rectangle_13} />
            <Text style={styles.ConfirmPassword}>Confirm Password</Text>
          </Image>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Image source={Rectangle4} style={styles.Rectangle4} />
              <Text style={styles.Register}>Register</Text>
            </View>
          </View>
          <Text style={styles.Alreadyhaveanacco}>Already have an account ?</Text>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  Login: {
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
  Rectangle: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 116,
    alignItems: 'flex-start',
    marginLeft: 16,
    justifyContent: 'center'
  },
  Email: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#7B6E6E',
    textAlign: 'left',
    marginLeft: 16
  },
  Rectangle_11: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 8,
    alignItems: 'flex-start',
    marginLeft: 16,
    justifyContent: 'center'
  },
  Password: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#7B6E6E',
    textAlign: 'left',
    marginLeft: 16
  },
  Rectangle_13: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 17,
    alignItems: 'flex-start',
    marginLeft: 16,
    justifyContent: 'center'
  },
  ConfirmPassword: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#7B6E6E',
    textAlign: 'left',
    marginLeft: 16
  },
  Rectangle4: {
    backgroundColor: '#0D2C4F'
  },
  Register: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#F8F3F3',
    textAlign: 'center'
  },
  Alreadyhaveanacco: {
    backgroundColor: 'transparent',
    fontSize: 9,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 3,
    marginTop: 29,
    textAlign: 'right'
  }
})
