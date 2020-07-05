import React from 'react';
import {
    Text, SafeAreaView, Image, TouchableOpacity, View, StyleSheet
} from 'react-native';

export const YogaLayout: React.FC = (props) => {
    return (
        <SafeAreaView style={{
            backgroundColor: 'blue',
            flex: 1,
            position: 'relative'
        }}>
            <Image
                style={{ flex: 1 }}
                source={{ uri: 'https://photo.techrum.vn/images/2019/02/24/zNRwG.jpg' }}
            />
            <View style={styles.container}>
                {/* <View style={{ backgroundColor: 'red', width: 60, height: 60, borderRadius: 30 }}>
                    <Text style={{ fontWeight: 'bold', fontFamily: 'AppleSDGothicNeo-Light' }}>1</Text>
                </View>
                <View style={[styles.box, styles.boxBlue]}>
                    <Text>2</Text>
                </View>
                <View style={[styles.box, styles.boxBlue]}>
                    <Text>3</Text>
                </View>
                <View style={[styles.box, styles.boxBlue]}>
                    <Text>3</Text>
                </View> */}
            </View>
            <View style={[styles.container, { backgroundColor: 'blue', top: 0, left: 60, right: 60 , zIndex: 1 }]}>
                {/* <View style={{ backgroundColor: 'red', width: 60, height: 60, borderRadius: 30 }}>
                    <Text style={{ fontWeight: 'bold', fontFamily: 'AppleSDGothicNeo-Light' }}>1</Text>
                </View>
                <View style={[styles.box, styles.boxBlue]}>
                    <Text>2</Text>
                </View>
                <View style={[styles.box, styles.boxBlue]}>
                    <Text>3</Text>
                </View>
                <View style={[styles.box, styles.boxBlue]}>
                    <Text>3</Text>
                </View> */}
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'white',
        flex: 1,
        top: 200,
        left: 20,
        right: 20,
        bottom: 200,
        zIndex: 2
    },
    box: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: 'red'
    },
    boxBlue: {
        backgroundColor: 'blue'
    }
})