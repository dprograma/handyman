import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Card from '../components/Card';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FreeServices = props => {
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text>Free Services Screen...</Text>
            </Card>
        </View>
    );
};

FreeServices.navigationOptions = navData => {
    return{
        headerLeft: <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item title="MENU" iconName={Platform.OS==='android'? 'md-menu':'ios-menu'} onPress={()=>{navData.navigation.toggleDrawer();}} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  });

export default FreeServices;