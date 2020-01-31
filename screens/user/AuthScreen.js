import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  Text,
  ActivityIndicator,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import sendEmail from 'react-native-email';
import { Ionicons } from '@expo/vector-icons';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

const AuthScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      username: '',
      email: '',
      password: ''
    },
    inputValidities: {
      username: false,
      email: false,
      password: false
    },
    formIsValid: false
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    if (isSignup) {
      action = authActions.signup(
        formState.inputValues.username,
        formState.inputValues.email,
        formState.inputValues.password
      );
    } else {
      action = authActions.login(
        formState.inputValues.email,
        formState.inputValues.password
      );
    }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      if (isSignup) {
        props.navigation.navigate('Login');
      }else{
        props.navigation.navigate('Shop');
      }
      const username = formState.inputValues.username;
      const email = formState.inputValues.email;

      // useEffect(() => {
      //   const to = [`${email}`];
      //   sendEmail(to, {
      //     subject: 'User Registration',
      //     body: `Hello ${username}, thank you for joing us. Please, log into the application with your login details`
      //   })
      // }, [username, email]);

      // useEffect(() => {
      //   const to_admin = ['kenegwuda@yahoo.com'];
      //   sendEmail(to_admin, {
      //     subject: 'User Registration',
      //     body: `Hello, you have a new user ${username} on HandyMan`
      //   })
      // }, [username]);

      // if(useremail ===  'ken@yahoo.com'){
      //props.navigation.navigate('Shop');
      // }else{
      //   props.navigation.navigate('Orders');
      // }
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            {isSignup ?
              <Input
                id="username"
                label="Username"
                keyboardType="default"
                required
                minLength={3}
                IconComponent={Ionicons}
                iconName='ios-person'
                autoCapitalize="none"
                errorText="Please enter your user name."
                onInputChange={inputChangeHandler}
                initialValue=""
              /> :
              null}
            <Input
              id="email"
              label="E-Mail"
              keyboardType="email-address"
              required
              email
              IconComponent={Ionicons}
              iconName='ios-mail'
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              IconComponent={Ionicons}
              iconName='ios-lock'
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.primary} />
              ) : (
                  <Button
                    title={isSignup ? 'Sign Up' : 'Login'}
                    color={Colors.primary}
                    onPress={authHandler}
                  />
                )}
            </View>
            <View style={styles.buttonContainer}>
              {/* <Button
                title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                color={Colors.accent}
                onPress={() => {
                  setIsSignup(prevState => !prevState);
                }}
              /> */}
              <TouchableOpacity style={styles.signInorUpTitle} onPress={() => {setIsSignup(prevState => !prevState)}}>
                    <Text style={styles.chooseList}>{isSignup ? 'Already a member? ' : 'Don\'t have an account? '}{isSignup ? 'Login': 'Sign Up'}</Text>
                  </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.forgotpasswordview} onPress={() => {props.navigation.navigate('Forgotpassword')}}>
                <Text style={styles.forgotpasswordtext}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: 'Authenticate'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotpasswordview:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  forgotpasswordtext:{
    color: Colors.primary,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20
  },
  signInorUpTitle:{
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chooseList: {
    color: Colors.accent,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 10
  }
});

export default AuthScreen;

