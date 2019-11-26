import React from 'react';
import { View, StyleSheet, Text, ImageBackground, FlatList } from 'react-native';
import Card from '../components/Card';
import { CATEGORIES } from '../data/dummydata';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import CategoryItems from '../components/Categoryitems';
import { useSelector } from 'react-redux';

const Services = props => {
    const catId = props.navigation.getParam('categoryId');

    const availableCategories = useSelector(state => state.categories.categories);

    const displayedCategory = availableCategories.filter(cat => cat.categoryId.indexOf(catId) >= 0);

    const categorySectionList = itemData => {
        return <CategoryItems firstissue={itemData.item.issue1} secondissue={itemData.item.issue2} thirdissue={itemData.item.issue3} fourthissue={itemData.item.issue4} fifthissue={itemData.item.issue5} sixthissue={itemData.item.issue6} seventhissue={itemData.item.issue7} onSelectCategory={() => { props.navigation.navigate({ routeName: 'serviceinformationform', params: { issueId: itemData.item.id }})}}/>;
    }
    return (
        <ImageBackground style={styles.imagestyle} source={require('../assets/serviceinfoform.png')}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text style={styles.title}>Services Screen</Text>
                    <FlatList data={displayedCategory} keyExtractor={(item, index) => item.id} renderItem={categorySectionList} />
                </Card>
            </View>
        </ImageBackground>
    );
};

Services.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

    return {
        headerTitle: selectedCategory.title,
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
        backgroundColor: 'rgba(0,0,0,0.36)'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'roboto-bold',
        fontSize: 22,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        color: 'rgba(255,255,255,0.86)',
        marginBottom: 10
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
    }
});

export default Services;