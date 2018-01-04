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

import Rectangle from './Add_Payee_images/Rectangle.png'
import Rectangle3 from './Add_Payee_images/Rectangle3.png'
import Rectangle_25 from './Add_Payee_images/Rectangle_25.png'
import Rectangle_23 from './Add_Payee_images/Rectangle_23.png'
import Rectangle_21 from './Add_Payee_images/Rectangle_21.png'
import Rectangle_20 from './Add_Payee_images/Rectangle_20.png'
import Rectangle_18 from './Add_Payee_images/Rectangle_18.png'
import Rectangle_16 from './Add_Payee_images/Rectangle_16.png'
import Rectangle5_29 from './Add_Payee_images/Rectangle5_29.png'
import Rectangle5 from './Add_Payee_images/Rectangle5.png'

export default class AddPayee extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#0D2C4F'}}>
        <View style={styles.Add_Payee}>
          <Image source={Rectangle} style={styles.Rectangle} />
            <Text style={styles.PayeeDetails}>Payee Details</Text>
          </Image>
          <Image source={Rectangle3} style={styles.Rectangle3} />
            <Text style={styles.FirstName}>First Name</Text>
            <Image source={Rectangle_25} style={styles.Rectangle_25} />
            <Text style={styles.MiddleName}>Middle Name</Text>
            <Image source={Rectangle_23} style={styles.Rectangle_23} />
            <Text style={styles.LastName}>Last Name</Text>
            <Image source={Rectangle_21} style={styles.Rectangle_21} />
            <Text style={styles.Address}>Address</Text>
            <Image source={Rectangle_20} style={styles.Rectangle_20} />
            <Text style={styles.BankDetails}>Bank Details</Text>
            <Image source={Rectangle_18} style={styles.Rectangle_18} />
            <Text style={styles.PhoneNumber}>Phone Number</Text>
            <Image source={Rectangle_16} style={styles.Rectangle_16} />
          </Image>
          <Image source={Rectangle5_29} style={styles.Rectangle5_29} />
            <Text style={styles.Submit}>Submit</Text>
          </Image>
          <Image source={Rectangle5} style={styles.Rectangle5} />
            <Text style={styles.Cancel}>Cancel</Text>
          </Image>
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
