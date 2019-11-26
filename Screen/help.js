import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const HelpScreen = props => {
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text>Help Screen...</Text>
            </Card>
        </View>
    );
};

HelpScreen.navigationOptions = navData => {
    return{
        headerLeft: <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item title="MENU" iconName='ios-menu' onPress={()=>{navData.navigation.toggleDrawer();}} />
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

export default HelpScreen;