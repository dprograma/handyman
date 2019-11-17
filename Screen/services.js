import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Button} from 'react-native';
import Card from '../components/Card';
import { CATEGORIES } from '../data/dummydata';

const Services = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <ImageBackground style={styles.imagestyle} source={require('../assets/serviceinfoform.png')}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text>Services Screen</Text>
                    <Button title="Service Information" onPress={()=>{props.navigation.navigate({routeName: 'serviceinformationform'})}} />
                </Card>
            </View>
        </ImageBackground>
    );
};

Services.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return{
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.36)'
    },
    imagestyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    card: {
        width: '90%',
        height: '80%',
        marginVertical: 10,
        alignItems: 'center'
    }
});

export default Services;