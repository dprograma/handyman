import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const Services = props => {
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text>Services Screen</Text>
            </Card>
        </View>
    );
};

Services.navigationOptions = {
    headerTitle: 'Artisan Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android'? Colors.primaryColor: ''
    },
    headerTintColor: Platform.OS === 'android'?'white': Colors.primaryColor
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  });

export default Services;