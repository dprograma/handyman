import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/Card';

const Services = props => {
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text>Services Screen</Text>
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

export default Services;