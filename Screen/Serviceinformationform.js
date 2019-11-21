import React from 'react';
import { View, StyleSheet, TextInput, Text, Button, ImageBackground } from 'react-native';
import Card from '../components/Card';
import { CATEGORYSECTIONS } from '../data/dummydata';

const ServiceInformationForm = props => {
    const issueId = props.navigation.getParam('issueId');
    return (
        <ImageBackground style={styles.imagestyle} source={require('../assets/serviceinfoform.png')}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <View>
                        <Text style={styles.title}>Service Information Form</Text>
                    </View>
                    <View>
                        <Text style={styles.textstyle}>First Name</Text>
                    </View>
                    <TextInput style={styles.inputstyle} />
                    <View>
                        <Text style={styles.textstyle}>Last Name</Text>
                    </View>
                    <TextInput style={styles.inputstyle} />
                    <View>
                        <Text style={styles.textstyle}>Phone Number</Text>
                    </View>
                    <TextInput style={styles.inputstyle} />
                    <View>
                        <Text style={styles.textstyle}>Email</Text>
                    </View>
                    <TextInput style={styles.inputstyle} />
                    <View>
                        <Text style={styles.textstyle}>Address Line 1</Text>
                    </View>
                    <TextInput style={styles.inputstyle} />
                    <View>
                        <Text style={styles.textstyle}>Address Line 2</Text>
                    </View>
                    <TextInput style={styles.inputstyle} />
                    <View style={styles.buttonview}>
                        <Button color="black" style={styles.inputbutton} title="Proceed" onPress={() => { props.navigation.navigate({ routeName: 'cart', params: {cartId: issueId} }) }} />
                    </View>
                </Card>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.36)'
    },
    card: {
        flex: 1,
        width: '90%',
        height: '80%',
        marginVertical: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'roboto-bold',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.8)',
        marginBottom: 10
    },
    textstyle: {
        textAlign: 'left',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14
    },
    inputstyle: {
        marginVertical: 5,
        borderBottomColor: 'rgba(255,255,255,0.26)',
        borderRadius: 0,
        borderBottomWidth: 1,
        width: 260,
        color: 'white'
    },
    inputbutton: {
        marginTop: 10,
        width: '60%',
        height: 6,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.26)'
    },
    buttonview: {
        alignContent: 'center',
        textAlign: 'center',
        marginVertical: 15,
        opacity: 0.46,
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

export default ServiceInformationForm;