import React from 'react';
import { View, StyleSheet, Text, ImageBackground, FlatList } from 'react-native';
import Card from '../components/Card';
import { CATEGORIES, CATEGORYSECTIONS } from '../data/dummydata';
import CategoryItems from '../components/Categoryitems';

const Services = props => {
    const catId = props.navigation.getParam('categoryId');

    const displayedCategory = CATEGORYSECTIONS.filter(cat => cat.categoryId.indexOf(catId) >= 0);

    const categorySectionList = itemData => {
        return <CategoryItems firstissue = {itemData.item.issue1} secondissue = {itemData.item.issue2} thirdissue = {itemData.item.issue3} fourthissue = {itemData.item.issue4} fifthissue = {itemData.item.issue5} sixthissue = {itemData.item.issue6} seventhissue = {itemData.item.issue7} />;
    }
    return (
        <ImageBackground style={styles.imagestyle} source={require('../assets/serviceinfoform.png')}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text>Services Screen</Text>
                    <FlatList data={displayedCategory} keyExtractor={(item, index) => item.id} renderItem={categorySectionList} />
                </Card>
            </View>
        </ImageBackground>
    );
};

Services.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
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