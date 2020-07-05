import React from 'react';
import {
    Text, SafeAreaView, Image, TouchableOpacity, View, StyleSheet
} from 'react-native';

const Default = '4003 6000 4145 3010'

interface CardRowProps {
    label: string
    value: string
}


export const CardRow: React.FC<CardRowProps> = (props) => {
    const { value, label } = props
    return (
        <View style={{}}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: '#eeeeee',
        fontWeight: '600'
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
})