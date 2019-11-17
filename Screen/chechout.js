import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';

const CheckOut = props => {
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text>CheckOut Screen</Text>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  });

export default CheckOut;