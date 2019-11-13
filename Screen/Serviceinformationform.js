import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const ServiceInformationForm = props => {
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text>ServiceInformationForm Screen</Text>
            </Card>
        </View>
    );
};

ServiceInformationForm.navigationOptions = {
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

export default ServiceInformationForm;