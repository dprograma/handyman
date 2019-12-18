import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Button, Platform, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import * as serviceActions from '../store/actions/serviceinformationaction';
import Colors from '../constants/colors';

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
        <FlatList />
    );
};

ServiceOverviewScreen.navigationOptions = navData => {
    return{
        headerLeft: <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item title="MENU" iconName={Platform.OS==='android'? 'md-menu':'ios-menu'} onPress={()=>{navData.navigation.toggleDrawer();}} />
        </HeaderButtons>
    };
};

const style = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ServiceOverviewScreen;