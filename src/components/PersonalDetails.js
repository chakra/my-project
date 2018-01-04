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

import Rectangle_30 from './Personal_Details_images/Rectangle_30.png'
import Line2decoration1 from './Personal_Details_images/Line2decoration1.png'
import Line2 from './Personal_Details_images/Line2.png'
import Rectangle3 from './Personal_Details_images/Rectangle3.png'
import Rectangle_22 from './Personal_Details_images/Rectangle_22.png'
import Rectangle_23 from './Personal_Details_images/Rectangle_23.png'
import Rectangle_26 from './Personal_Details_images/Rectangle_26.png'
import Rectangle_28 from './Personal_Details_images/Rectangle_28.png'
import Rectangle_16 from './Personal_Details_images/Rectangle_16.png'
import Rectangle_18 from './Personal_Details_images/Rectangle_18.png'
import Rectangle_20 from './Personal_Details_images/Rectangle_20.png'
import Rectangle from './Personal_Details_images/Rectangle.png'
import Rectangle5 from './Personal_Details_images/Rectangle5.png'

export default class PersonalDetails extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#0D2C4F'}}>
        <View style={styles.Personal_Details}>
          <Image source={Rectangle_30} style={styles.Rectangle_30} />
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.PersonalDetails}>Personal Details</Text>
              <Image source={Line2decoration1} style={styles.Line2decoration1} />
              <Image source={Line2} style={styles.Line2} />
            </View>
          </Image>
          <Image source={Rectangle3} style={styles.Rectangle3} />
            <Text style={styles.FirstName}>First Name</Text>
            <Image source={Rectangle_22} style={styles.Rectangle_22} />
            <Text style={styles.MiddleName}>Middle Name</Text>
            <Image source={Rectangle_23} style={styles.Rectangle_23} />
            <Text style={styles.LastName}>Last Name</Text>
            <Image source={Rectangle_26} style={styles.Rectangle_26} />
            <Text style={styles.Unit}>Unit</Text>
            <Image source={Rectangle_28} style={styles.Rectangle_28} />
            <Text style={styles.StreetAddress}>Street Address</Text>
            <Image source={Rectangle_16} style={styles.Rectangle_16} />
            <Text style={styles.State}>State</Text>
            <Image source={Rectangle_18} style={styles.Rectangle_18} />
            <Text style={styles.PostCode}>Post Code</Text>
            <Image source={Rectangle_20} style={styles.Rectangle_20} />
            <Text style={styles.PassportNumber}>Passport Number</Text>
            <Image source={Rectangle} style={styles.Rectangle} />
          </Image>
          <Image source={Rectangle5} style={styles.Rectangle5} />
            <Text style={styles.Submit}>Submit</Text>
          </Image>
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
