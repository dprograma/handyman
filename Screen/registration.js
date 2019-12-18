import React, { useState, useCallback, useEffect, useReducer } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Registration = props => {
    const [firstNameIsValid, setFirstNameIsValid] = useState('');
    const [lastNameIsValid, setLastNameIsValid] = useState('');
    const [isPassword, setIsPassword] = useState('');
    const [isConfirmed, setIsConfirmed] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmError, setConfirmError] = useState(false);

    

    const firstNameChangeHandler = text => {
        if (!isNaN(text.trim()) || text.trim().minLength < 3) {
            setFirstNameIsValid('');
            setFirstNameError(true);
        } else {
            setFirstNameIsValid(text);
            setFirstNameError(false);
        }
    };

    const lastNameChangeHandler = text => {
        if (!isNaN(text.trim()) || text.trim().minLength < 3) {
            setLastNameIsValid('');
            setLastNameError(true);
        } else {
            setLastNameIsValid(text);
            setLastNameError(false);
        }
    };

    const passwordHandler = pwd => {
        if (pwd.length === 0 || pwd.minLength < 6 ) {
            setIsPassword('');
            setPasswordError(true);
        } else {
            setIsPassword(pwd);
            setConfirmError(false);
        }  
    };

    const pwdConfirmHandler = pwdConfirm => {
        if(pwdConfirm.length === 0 || pwdConfirm.minLength < 6){
           setIsConfirmed('');
        }else{
            setIsConfirmed(pwdConfirm);
        }    
    };

    const submitHandler = () => {
        if(!isNaN(firstNameIsValid.trim()) || firstNameIsValid.trim().minLength < 3){
            setFirstNameError(true);
            return;
        }
        else if(!isNaN(lastNameIsValid.trim()) || lastNameIsValid.trim().minLength < 3){
            setLastNameError(true);
            return;
        }
        else if(isPassword.length === 0 || isPassword.minLength < 6 ){
            setPasswordError(true);
            return;
        }
        else if(isConfirmed !== isPassword){
            setConfirmError(true);
            return;
        }
        setFirstNameError(true);
        setLastNameError(true);
        setPasswordError(true);
        setConfirmError(true);
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' keyboardVerticalOffset={100}>
            <ImageBackground style={styles.imagestyle} source={require('../assets/bg.png')}>
                <ScrollView>
                    <Card style={styles.card}>
                        <View><Text style={styles.title}>Sign Up</Text></View>
                        <View><Text style={styles.user} >Firstname</Text></View>
                        <TextInput style={styles.input} keyboardType='default' autoCapitalize='sentences' autoCorrect returnKeyType='next' onChangeText={firstNameChangeHandler} value={firstNameIsValid} />
                        { firstNameError && <Text style={{color: 'red', fontFamily:'roboto-bold'}}>Enter a valid firstname!</Text> }
                        <View>
                            <Text style={styles.user} >Lastname</Text>
                        </View>
                        <TextInput style={styles.input} keyboardType='default' autoCapitalize='sentences' autoCorrect returnKeyType='next' onChangeText={lastNameChangeHandler} value={lastNameIsValid} />
                        { lastNameError && <Text style={{color: 'red', fontFamily:'roboto-bold'}}>Enter a valid lastname!</Text> }
                        <View>
                            <Text style={styles.user} >Email</Text>
                        </View>
                        <TextInput style={styles.input} keyboardType='default' autoCapitalize='sentences' autoCorrect returnKeyType='next' />
                        <View>
                            <Text style={styles.user}>Password</Text>
                        </View>
                        <TextInput secureTextEntry={true} style={styles.input} keyboardType='default' returnKeyType='next' onChangeText={passwordHandler} value={isPassword} />
                        { passwordError && <Text style={{color: 'red', fontFamily:'roboto-bold'}}>Invalid password!</Text> }
                        <View>
                            <Text style={styles.user}>Confirm</Text>
                        </View>
                        <TextInput secureTextEntry={true} style={styles.input} keyboardType='default' returnKeyType='next' onChangeText={pwdConfirmHandler} value={isConfirmed}/>
                        { confirmError && <Text style={{color: 'red', fontFamily:'roboto-bold'}}>Password mismatch!</Text> }
                        <View style={styles.signupButtonView}>
                            <Button color="black" style={styles.signUpButton} title="Sign Up" onPress={submitHandler} />
                        </View>
                        <View style={styles.signInView}>
                            <Text style={styles.alreadyMember}>Already a Member?</Text>
                            <TouchableOpacity onPress={() => { props.navigation.navigate({ routeName: 'login' }) }}>
                                <Text style={styles.signIn}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.policyTermsandConditon}>
                            <Text style={styles.termsAndConditions}>Terms and Conditions</Text>
                            <Text style={styles.privacyPolicy} >Privacy Policy</Text>
                        </View>

                    </Card>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView >
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
        borderRadius: 5,
        overflow: 'hidden'
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
        flex: 1,
        width: '100%',
        height: '80%',
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