import React from 'react';
import { View, FlatList, StyleSheet, Text} from 'react-native';
import Card from '../components/Card';
import { CATEGORIES } from '../data/dummydata';

const renderGridItem = (itemData) => {
    return <View style={styles.gridItem}><Text>{itemData.item.title}</Text></View>;
};

const Home = props => {
    return(
        <FlatList keyExtractor={(item, index) => item.id} data={ CATEGORIES } renderItem={renderGridItem} numColumns={3} />
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
  });

export default Home;