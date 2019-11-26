import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput, Button, Image } from 'react-native';
import Card from '../components/Card';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';

const Cart = props => {
    const cartId = props.navigation.getParam('cartId');

    const availableCategories = useSelector(state => state.categories.categories);

    const selectedIssue = availableCategories.find(issue => issue.id === cartId);

    return (
        <ImageBackground style={styles.imagestyle} source={require('../assets/serviceinfoform.png')}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <View>
                        <Text style={styles.title}>Cart</Text>
                    </View>
                    <View style={styles.servicedescription}>
                        <View style={styles.imageview}>
                            <Image source={require('../assets/bg.png')} style={styles.servicethumb} />
                        </View>
                        <View style={styles.servicetype}>
                            <Text style={styles.servicetext}>Category: {selectedIssue.title}</Text>
                            <Text style={styles.servicetext}>Issue: </Text>
                        </View>
                    </View>
                    <TextInput style={styles.inputstyle} />
                    <View style={styles.servicedetailsview}>
                        <View style={styles.servicedescriptionlist}>
                            <Text style={styles.servicetext}>Service Charge</Text>
                            <Text style={styles.servicetext}>Logistics</Text>
                            <Text style={styles.servicetext}>Tax</Text>
                        </View>
                        <View style={styles.serviceprice}>
                            <Text style={styles.servicetext}>{selectedIssue.serviceCharge}</Text>
                            <Text style={styles.servicetext}>{selectedIssue.logistics}</Text>
                            <Text style={styles.servicetext}>{selectedIssue.tax}</Text>
                        </View>
                    </View>
                    <TextInput style={styles.inputstyle} />
                    <View style={styles.servicetotalview}>
                        <View style={styles.servicechargetext}>
                            <Text style={styles.servicetext}>Service Charge Total</Text>
                        </View>
                        <View style={styles.servicechargeprice}>
                            <TextInput style={{width: 100, borderBottomColor: 'rgba(255,255,255,0.56)', borderBottomWidth: 1}} />
                            <Text style={styles.servicetext}>{+selectedIssue.serviceCharge + +selectedIssue.logistics + +selectedIssue.tax}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonview}>
                        <Button color='black' title="Check Out" style={styles.buttonstyle} onPress={() => { props.navigation.navigate({ routeName: 'checkout' }) }} />
                    </View>
                </Card>
            </View>
        </ImageBackground>
    );
};

Cart.navigationOptions = navData => {
    return{
        headerLeft: <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item title="MENU" iconName='ios-menu' onPress={()=>{navData.navigation.toggleDrawer();}} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.26)'
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
    servicedescription: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        maxHeight: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.56)'
    },
    servicethumb: {
        flex: 1,
        width: '90%',
        height: '90%',
        marginLeft: 5
    },
    servicetype: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 10,
        width: '65%',
        height: '90%'
    },
    servicetext: {
        textAlign: 'left',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 15
    },
    imageview: {
        width: '35%',
        height: '90%'
    },
    inputstyle: {
        marginVertical: 0,
        borderBottomColor: 'rgba(255,255,255,0.26)',
        borderRadius: 0,
        borderBottomWidth: 1,
        width: 260,
        color: 'white',
        height: 15
    },
    servicedetailsview: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 120,
        maxHeight: '40%',
        marginTop: 15
    },
    servicedescriptionlist: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '50%',
        height: '90%'
    },
    serviceprice: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '50%',
        height: '90%',
        backgroundColor: 'rgba(0,0,0,0.56)',
        paddingLeft: 20
    },
    servicetotalview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 70,
        maxHeight: '30%',
        backgroundColor: 'rgba(0,0,0,0.56)',
        marginVertical: 15,
        padding: 10,
    },
    servicechargetext: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '30%'
    },
    servicechargeprice: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
        width: '50%',
        height: '30%'
    },
    buttonview: {
        opacity: 0.56,
        alignContent: 'center',
        textAlign: 'center',
        width: '60%'
    },
    buttonstyle: {
        width: '100%',
        borderColor: 'black'
    }
});

export default Cart;