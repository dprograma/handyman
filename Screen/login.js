import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Platform, ImageBackground } from 'react-native';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/colors';

const Login = props => {
    return (
        <ImageBackground style={styles.imagestyle} source={require('../assets/bg.png')}>
            <Card style={styles.card}>
                <View><Text style={styles.title}>Login</Text></View>
                <View><Text style={styles.user} >Username</Text></View>
                <TextInput style={styles.input} />
                <View><Text style={styles.user}>Password</Text></View>
                <TextInput style={styles.input} />
                <View><Text style={styles.forgotPassword}>Forgot Password?</Text></View>
                <TouchableOpacity style={styles.imageView} onPress={() => { props.navigation.navigate({ routeName: 'registration' }) }} >
                    <Image style={styles.imageButton} source={require('../assets/imagebutton.png')} />
                    <Text style={styles.newAccount}>New Account</Text>
                </TouchableOpacity>
            </Card>
        </ImageBackground>
    );
};

Login.navigationOptions = {
    headerTitle: 'User Login',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    input: {
        marginVertical: 5,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        borderRadius: 0,
        borderBottomWidth: 1,
        width: 260,
        color: 'white'
    },
    user: {
        fontSize: 14,
        color: 'white',
        textAlign: 'left'
    },
    forgotPassword: {
        textAlign: 'right',
        fontSize: 14,
        color: 'white',
        marginVertical: 15
    },
    imageButton: {
        width: 100,
        height: 100,
        alignItems: 'center'
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.46
    },
    newAccount: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    },
    inputAlign: {
        flexDirection: 'row',
        textAlign: 'center'
    },
    card: {
        width: '90%',
        height: 400,
        maxHeight: '70%',
        marginBottom: 20
    },
    imagestyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default Login;