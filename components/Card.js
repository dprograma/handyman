import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(52,52,52,0.5)',
        padding: 10,
        borderRadius: 10
    }
});

export default Card;