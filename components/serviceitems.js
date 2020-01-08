import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import IssueItem from '../components/issueitem';

const serviceItem = props => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.itemservice}>
      <View style={styles.summary}>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setShowDetails(prevState => !prevState);
        }}
      >
          {showDetails ? <Text>Hide Details</Text> : <Text>Show Details</Text>}
      </TouchableOpacity>
      {showDetails && (
        <View style={styles.detailItems}>
          <Text>Name: {props.firstname} {props.lastname}</Text>
          <Text>Phone number: {props.phonenumber}</Text>
          <Text>Email: {props.email}</Text>
          <Text style={styles.date}>Date of service request: {props.updateddate}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemservice: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    alignItems: 'center'
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15
  },
  date: {
    fontSize: 16,
    fontFamily: 'roboto-regular',
    color: '#888'
  },
  detailItems: {
    width: '100%'
  }
});

export default serviceItem;
