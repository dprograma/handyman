import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import * as firebase from 'firebase';
import * as resetActions from '../../store/actions/auth';
import { TextInput } from 'react-native-gesture-handler';

// const FORM_RESET_UPDATE = 'FORM_RESET_UPDATE';

// const formReducer = (state, action) => {
//   if (action.type === FORM_RESET_UPDATE) {
//     const updatedValues = {
//       ...state.inputValues,
//       [action.input]: action.value
//     };
//     const updatedValidities = {
//       ...state.inputValidities,
//       [action.input]: action.isValid
//     };
//     let updatedFormIsValid = true;
//     for (const key in updatedValidities) {
//       updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
//     }
//     return {
//       formIsValid: updatedFormIsValid,
//       inputValidities: updatedValidities,
//       inputValues: updatedValues
//     };
//   }
//   return state;
// };

const ForgotPasswordScreen = props => {

  if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }

  const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState();
  const [email, setEmail] = useState('');
  //const dispatch = useDispatch();

  onResetPasswordPress = useCallback(() => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert("Password reset email has been sent.");
        props.navigation.navigate('Auth');
      }, (error) => {
        Alert.alert(error.message);
        setIsLoading(false);
      })
  });

  // const [formState, dispatchFormState] = useReducer(formReducer, {
  //   inputValues: {
  //     email: ''
  //   },
  //   inputValidities: {
  //     email: false
  //   },
  //   formIsValid: false
  // });

  // useEffect(() => {
  //   if (error) {
  //     Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
  //   }
  // }, [error]);

  // const authHandler = async () => {
  //   let action;

  //     action = resetActions.reset(
  //       formState.inputValues.email,
  //     );

  //   setError(null);
  //   setIsLoading(true);
  //   try {
  //     await dispatch(action);
  //     props.navigation.navigate('Shop');
  //     const email = formState.inputValues.email;

  //     useEffect(() => {
  //       const to = [`${email}`];
  //       sendEmail(to, {
  //         subject: 'Password Reset',
  //         body: `Hello, use the token below to complete your password reset.`
  //       })
  //     }, [email]);

  //   } catch (err) {
  //     setError(err.message);
  //     setIsLoading(false);
  //   }
  // };


  // const inputChangeHandler = useCallback(
  //   (inputIdentifier, inputValue, inputValidity) => {
  //     dispatchFormState({
  //       type: FORM_RESET_UPDATE,
  //       value: inputValue,
  //       isValid: inputValidity,
  //       input: inputIdentifier
  //     });
  //   },
  //   [dispatchFormState]
  // );

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <View>
              <Text style={{fontWeight: 'bold'}}>E-mail</Text>
              <TextInput style={styles.input}
              keyboardType="default"
              required
              autoFocus={true}
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onChangeText={(text) => { setEmail(text) }}
              value={email}></TextInput>
            </View>
            {/* <Input
              id="forgotpassword"
              label="E-mail"
              keyboardType="default"
              required
              autoFocus={true}
              iconName='md-mail'
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onInputChange = {() => {}}
              onChangeText={(text) => { setEmail(text) }}
              initialValue={email}
              value={email}
            /> */}
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.primary} />
              ) : (
                  <Button
                    title="Submit"
                    color={Colors.primary}
                    onPress={onResetPasswordPress}
                  />
                )}
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

ForgotPasswordScreen.navigationOptions = {
  headerTitle: 'Forgot Password'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20
  },
  buttonContainer: {
    marginTop: 10
  }
});

export default ForgotPasswordScreen;