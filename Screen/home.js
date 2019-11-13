import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Platform, ImageBackground} from 'react-native';
import Card from '../components/Card';
import { CATEGORIES } from '../data/dummydata';
import Colors from '../constants/colors';

const Home = props => {
    const renderGridItem = (itemData) => {
        return (<TouchableOpacity style={styles.gridItem} onPress={() => { props.navigation.navigate({ routeName: 'services' }) }} >
            <View>
                <Text style={styles.gridText}>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>);
    };
    return (
        <ImageBackground style={styles.background} source={require('../assets/bg.png')}>
            <View style={styles.overlay}>
                <Text style={styles.servicetitle}>Choose Category of Service</Text>

                <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={3} />
            </View>
        </ImageBackground>
    );
};

Home.navigationOptions = {
    headerTitle: 'Artisan Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 10,
        height: 85,
        width: 100,
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.35)',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 8, },
        shadowOpacity: 0.36,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        padding: 5
    },
    gridText: {
        textAlign: 'center'
    },
    servicetitle: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'roboto-bold',
        color: 'rgba(255,255,255,0.65)',
        textDecorationLine: 'underline',
        marginVertical: 20
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.36)'
    }
});

export default Home;