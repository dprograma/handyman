import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Platform, ImageBackground } from 'react-native';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/colors';

const Registration = props => {
    return (
        <ImageBackground style={styles.imagestyle} source={require('../assets/bg.png')}>
            <Card style={styles.card}>
                <View><Text style={styles.title}>Sign Up</Text></View>
                <View><Text style={styles.user} >Firstname</Text></View>
                <TextInput style={styles.input} />
                <View><Text style={styles.user} >Lastname</Text></View>
                <TextInput style={styles.input} />
                <View><Text style={styles.user} >Username</Text></View>
                <TextInput style={styles.input} />
                <View><Text style={styles.user}>Password</Text></View>
                <TextInput secureTextEntry={true} style={styles.input} />
                <View><Text style={styles.user}>Confirm</Text></View>
                <TextInput secureTextEntry={true} style={styles.input} />
                <View style={styles.signupButtonView}>
                    <Button color="black" style={styles.signUpButton} title="Sign Up" onPress={() => { props.navigation.navigate({ routeName: 'home' }) }} />
                </View>
                <View style={styles.signInView}><Text style={styles.alreadyMember}>Already a Member?</Text><TouchableOpacity onPress={() => { props.navigation.navigate({ routeName: 'login' }) }}><Text style={styles.signIn}>Sign in</Text></TouchableOpacity></View>
                <View style={styles.policyTermsandConditon}><Text style={styles.termsAndConditions}>Terms and Conditions</Text><Text style={styles.privacyPolicy} >Privacy Policy</Text></View>
            </Card>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    signInView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    alreadyMember: {
        color: 'rgba(255,255,255,0.78)',
        marginRight: 5
    },
    signupButtonView: {
        alignContent: 'center',
        textAlign: 'center',
        marginVertical: 15,
        opacity: 0.46,
    },
    signUpButton: {
        width: '60%',
        height: 6,
        borderRadius: 10
    },
    signIn: {
        color: 'green'
    },
    title: {
        fontSize: 20,
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    termsAndConditions: {
        textAlign: 'center',
        color: 'rgba(255,255,255,0.8)',
        marginRight: 40
    },
    privacyPolicy: {
        textAlign: 'center',
        color: 'rgba(255,255,255,0.8)',

    },
    input: {
        marginVertical: 5,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        borderRadius: 0,
        borderBottomWidth: 1,
        width: 260,
        color: 'white'
    },
    policyTermsandConditon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    user: {
        fontSize: 14,
        color: 'white',
        textAlign: 'left'
    },
    inputAlign: {
        flexDirection: 'row',
        textAlign: 'center'
    },
    card: {
        width: '90%',
        height: 600,
        maxHeight: '100%',
        marginVertical: 10
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

export default Registration;