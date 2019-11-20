import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryItems = props => {
    return (
        <View>
            <TouchableOpacity><Text>{props.firstissue}</Text></TouchableOpacity>
            <TouchableOpacity><Text>{props.secondissue}</Text></TouchableOpacity>
            <TouchableOpacity><Text>{props.thirdissue}</Text></TouchableOpacity>
            <TouchableOpacity><Text>{props.fourthissue}</Text></TouchableOpacity>
            <TouchableOpacity><Text>{props.fifthissue}</Text></TouchableOpacity>
            <TouchableOpacity><Text>{props.sixthissue}</Text></TouchableOpacity>
            <TouchableOpacity><Text>{props.seventhissue}</Text></TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({});

export default CategoryItems;