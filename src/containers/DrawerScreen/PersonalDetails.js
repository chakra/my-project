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

export default class PersonalDetails extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#0D2C4F'}}>
        <View style={styles.Personal_Details}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.PersonalDetails}>Personal Details</Text>
            </View>
            <Text style={styles.FirstName}>First Name</Text>
            <Text style={styles.MiddleName}>Middle Name</Text>
            <Text style={styles.LastName}>Last Name</Text>
            <Text style={styles.Unit}>Unit</Text>
            <Text style={styles.StreetAddress}>Street Address</Text>
            <Text style={styles.State}>State</Text>
            <Text style={styles.PostCode}>Post Code</Text>
            <Text style={styles.PassportNumber}>Passport Number</Text>
            <Text style={styles.Submit}>Submit</Text>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  Personal_Details: {
    width: 345,
    paddingTop: 12
  },
  Rectangle_30: {
    backgroundColor: '#0D2C4F',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  PersonalDetails: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Line2decoration1: {

  },
  Line2: {

  },
  Rectangle3: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 20,
    paddingTop: 31,
    paddingBottom: 18
  },
  FirstName: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080A09',
    alignSelf: 'flex-start',
    marginLeft: 25,
    textAlign: 'left'
  },
  Rectangle_22: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 6
  },
  MiddleName: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080A09',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 8,
    textAlign: 'left'
  },
  Rectangle_23: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 5
  },
  LastName: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080A09',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 4,
    textAlign: 'left'
  },
  Rectangle_26: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 5
  },
  Unit: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080A09',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 10,
    textAlign: 'left'
  },
  Rectangle_28: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 5
  },
  StreetAddress: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080A09',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 4,
    textAlign: 'left'
  },
  Rectangle_16: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 5
  },
  State: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080A09',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 8,
    textAlign: 'left'
  },
  Rectangle_18: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 5
  },
  PostCode: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080A09',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 7,
    textAlign: 'left'
  },
  Rectangle_20: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 5
  },
  PassportNumber: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080A09',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 4,
    textAlign: 'left'
  },
  Rectangle: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 5
  },
  Rectangle5: {
    backgroundColor: '#0D2C4F',
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Submit: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
