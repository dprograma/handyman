import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Button, Platform, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import * as serviceActions from '../store/actions/serviceinformationaction';
import Colors from '../constants/colors';
import ServiceItem from '../components/serviceitems';

const ServiceOverviewScreen =  props => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const services = useSelector(state => state.serviceinformation.userServiceInformation);
    const dispatch = useDispatch();

    const loadServices = useCallback(async() => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(serviceActions.fetchService());
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        const willFocusSub = props.navigation.addListener('willFocus', loadServices);

        return () => {
            willFocusSub.remove();
        };
    }, [loadServices]);

    useEffect(() => {
        loadServices();
    }, [dispatch, loadServices]);

    if (error) {
        return <View style={styles.centered}>
            <Text>An error occurred!</Text>
            <Button title="Try Again" onPress={loadServices} color={Colors.primary} />
        </View>
    }

    if (isLoading) {
        return(
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    if (!isLoading && services.length === 0) {
        return(
            <View style={styles.centered}>
                <Text>No services found. Maybe you should add some!</Text>
            </View>
        );
    }

    return(
        <FlatList data={services} keyExtractor={item => item.id} renderItem={itemData => (
        <ServiceItem 
            firstname = {itemData.item.firstname}
            lastname = {itemData.item.lastname}
            phonenumber = {itemData.item.phonenumber}
            email = {itemData.item.email}
            address1 = {itemData.item.address1}
            address2 = {itemData.item.address2}
            updateddate = {itemData.item.updateddate}
        />
        )} />
    );
};

ServiceOverviewScreen.navigationOptions = navData => {
    return{
        headerLeft: <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item title="MENU" iconName={Platform.OS==='android'? 'md-menu':'ios-menu'} onPress={()=>{navData.navigation.toggleDrawer();}} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ServiceOverviewScreen;