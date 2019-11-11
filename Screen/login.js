import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = props => {
    return (
        <Card style={styles.card}>
            <View><Text style={styles.title}>Login</Text></View>
            <View><Text style={styles.user} >Username</Text></View>
            <TextInput style={styles.input} />
            <View><Text style={styles.user}>Password</Text></View>
            <TextInput style={styles.input} />
            <View><Text style={styles.forgotPassword}>Forgot Password?</Text></View>
            <TouchableOpacity style={styles.imageView} onPress={()=>{props.navigation.navigate({routeName:'registration'})}} ><Image style={styles.imageButton} source={require('../assets/imagebutton.png')} /></TouchableOpacity>
            <View><Text style={styles.newAccount}>New Account</Text></View>
        </Card>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    input: {
        marginVertical: 8,
        borderBottomColor: 'black',
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
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
    imageView:{
        justifyContent: 'center',
        alignItems: 'center'
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
        maxHeight: '65%',
        marginBottom: 20
    }
});

export default Login;