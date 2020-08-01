import React from 'react';
import {
    Text, SafeAreaView, Image, TouchableOpacity, View
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

const AVATAR_URL = 'https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9-1.jpg?fit=624%2C563&ssl=1'
interface WelcomeScreenProps {
    navigation: StackNavigationProp<any>
}
export const WelcomeScreen = (props: WelcomeScreenProps) => {
    const { navigation } = props
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>
            <Image
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                }}
                source={{ uri: AVATAR_URL }}
            />

            <View style={{ alignItems: 'center' }}>
                <Text
                    style={{
                        marginTop: 20,
                        fontWeight: 'bold',
                        fontSize: 30
                    }}
                >
                    Trần Văn Tý
                </Text>
                <Text
                    style={{
                        marginTop: 20,
                        fontWeight: '200',
                        fontSize: 16,
                        textAlign: 'center',
                        paddingHorizontal: 20,
                        fontStyle: 'italic'
                    }}
                >
                    If necessary, create an Android virtual device
                    If you do not have an Android device for testing, you can use an Android virtual device.To do this, you must first install the Android SDK and install the corresponding SDK platforms and packages. See Set up the Android development environment.
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Otp')}
                style={{
                    backgroundColor: 'green',
                    width: '40%',
                    height: 45,
                    borderRadius: 22.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Đăng nhập</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};



