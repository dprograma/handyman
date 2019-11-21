import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryItems = props => {
    return (
        <View>
            <TouchableOpacity  style={styles.touchlist} onPress={props.onSelectCategory}><Text style={styles.titlelist}>{props.firstissue}</Text></TouchableOpacity>
            <TouchableOpacity  style={styles.touchlist} onPress={props.onSelectCategory}><Text style={styles.titlelist}>{props.secondissue}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchlist} onPress={props.onSelectCategory}><Text style={styles.titlelist}>{props.thirdissue}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchlist} onPress={props.onSelectCategory}><Text style={styles.titlelist}>{props.fourthissue}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchlist} onPress={props.onSelectCategory}><Text style={styles.titlelist}>{props.fifthissue}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchlist} onPress={props.onSelectCategory}><Text style={styles.titlelist}>{props.sixthissue}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchlist} onPress={props.onSelectCategory}><Text style={styles.titlelist}>{props.seventhissue}</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    titlelist: {
        textAlign: 'left',
        color: 'rgba(255,255,255,0.86)',
        fontFamily: 'roboto-regular',
        fontSize: 18,
        marginVertical: 10,
        textShadowColor: 'rgba(0,0,0,0.56)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 1
    },
    touchlist: {
        justifyContent: 'center'
    }
});

export default CategoryItems;