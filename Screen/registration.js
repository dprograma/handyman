import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Registration = props => {
    return (
        <Card style={styles.card}>
            <View><Text style={styles.title}>Sign Up</Text></View>
            <View><Text style={styles.user} >Firstname</Text></View>
            <TextInput style={styles.input} />
            <View><Text style={styles.user} >Lastname</Text></View>
            <TextInput style={styles.input} />
            <View><Text style={styles.user} >Username</Text></View>
            <TextInput style={styles.input} />
            <View><Text style={styles.user}>Password</Text></View>
            <TextInput style={styles.input} />
            <View><Text style={styles.user}>Confirm</Text></View>
            <TextInput style={styles.input} />
            <View style={styles.signupButtonView}>
                <Button color="black" style={styles.signUpButton} title="Sign Up" onPress={()=>{props.navigation.navigate({routeName:'home'})}} />
            </View>
            <View><Text style={styles.alreadyMember}>Already a Member?</Text><TouchableOpacity style={styles.signIn} onPress={()=>{props.navigation.navigate({routeName:'login'})}}><Text>Sign in</Text></TouchableOpacity></View>
            <View style={styles.policyTermsandConditon}><Text style={styles.termsAndConditions}>Terms and Conditions</Text><Text style={styles.privacyPolicy} >Privacy Policy</Text></View>
        </Card>
    );
};

const styles = StyleSheet.create({
    alreadyMember:{
        textAlign: 'center',
        color: 'rgba(255,255,255,0.78)',
    },
    signupButtonView:{
        alignContent: 'center',
        textAlign: 'center',
        marginVertical: 15,
        opacity: 0.46,
    },
    signUpButton:{
        width: '60%',
        height: 6,
        borderRadius: 10
    },
    signIn:{
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
        marginVertical: 8,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        borderRadius: 0,
        borderBottomWidth: 1,
        width: 260,
        color: 'white'
    },
    policyTermsandConditon:{
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
        maxHeight: '90%',
        marginBottom: 20
    }
});

export default Registration;