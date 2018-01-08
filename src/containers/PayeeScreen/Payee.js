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

export default class AddPayee extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#0D2C4F'}}>
        <View style={styles.Add_Payee}>
            <Text style={styles.PayeeDetails}>Payee Details</Text>
            <Text style={styles.FirstName}>First Name</Text>
            <Text style={styles.MiddleName}>Middle Name</Text>
            <Text style={styles.LastName}>Last Name</Text>
            <Text style={styles.Address}>Address</Text>
            <Text style={styles.BankDetails}>Bank Details</Text>
            <Text style={styles.PhoneNumber}>Phone Number</Text>
            <Text style={styles.Submit}>Submit</Text>
            <Text style={styles.Cancel}>Cancel</Text>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  Add_Payee: {
    width: 344
  },
  Rectangle: {
    backgroundColor: '#0D2C4F',
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginLeft: 97,
    justifyContent: 'center'
  },
  PayeeDetails: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 97
  },
  Rectangle3: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 13
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
  Rectangle_25: {
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
  Rectangle_21: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 5
  },
  Address: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080A09',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 10,
    textAlign: 'left'
  },
  Rectangle_20: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 5
  },
  BankDetails: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080A09',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 7,
    textAlign: 'left'
  },
  Rectangle_18: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 5
  },
  PhoneNumber: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#080A09',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 8,
    textAlign: 'left'
  },
  Rectangle_16: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: 5
  },
  Rectangle5_29: {
    backgroundColor: '#0D2C4F',
    alignSelf: 'center',
    marginTop: 65,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Submit: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Rectangle5: {
    backgroundColor: '#0D2C4F',
    alignSelf: 'center',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Cancel: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
