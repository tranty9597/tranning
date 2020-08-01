import React from 'react';
import {
    Text, SafeAreaView, Image, TouchableOpacity, View, StyleSheet, TextInput
} from 'react-native';
import { CardRow } from './CardRow';

const Default = '4003 6000 4145 3010'

export interface PaymentCardProps {
    type: string
}

export const PaymentCard: React.FC<PaymentCardProps> = (props) => {
    const { type } = props

    const background = type === 'master' ? 'https://photo.techrum.vn/images/2019/02/24/zNRwG.jpg' : 'https://mma.prnewswire.com/media/928819/Visa_Canada_Visa_and_PayPal_join_forces_to_allow_consumers_and_s.jpg?p=twitter';

    let [cardNumber, setCardNumber] = React.useState(Default)
    const [holderName, setHolderName] = React.useState('Tran Van Ty')
    const [error, setError] = React.useState<string>()
    const onPress = () => {
        setCardNumber(Math.random() * 1000000000 + '')
        setHolderName(' Changeedddd')
    }

    const onChangeCardNumber = (value: string) => {
        setCardNumber(value)
        if (Number(value)) {
            setError('')
        } else {
            setError('Not a valid number')
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.card]}>
                <Image
                    style={styles.image}
                    source={{ uri: background }}
                />
                <View style={styles.cardOverlay}>
                    <CardRow
                        label='Card number'
                        value={cardNumber}
                    />
                    <CardRow
                        label='Holder name'
                        value={holderName}
                    />
                    <View style={styles.row}>
                        <View style={{}}>
                            <Text style={styles.label}>Expire date</Text>
                            <Text style={styles.value}>18/20</Text>
                        </View>
                        <View style={styles.cvv}>
                            <Text style={styles.label}>CVV</Text>
                            <Text style={styles.value}>900</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text>{error}</Text>
            <TouchableOpacity
                onPress={onPress}
                style={styles.floatingButton}
            >
                <Image
                    style={{ width: 25, height: 25 }}
                    source={{ uri: 'https://png.pengtree.com/png-vector/20190419/ourmid/pngtree-vector-plus-icon-png-image_957098.jpg' }} />
            </TouchableOpacity>
            <TextInput
                onChangeText={onChangeCardNumber}
                keyboardType='number-pad'
                style={{ backgroundColor: 'red', height: 50 }} />
            <TextInput
                onChangeText={text => setCardNumber(text)}
                style={{ backgroundColor: 'red', height: 50 }} />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // backgroundColor: "blue"
    },
    card: {
        width: '90%',
        height: 250,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.5
    },
    image: {
        borderRadius: 12,
        flex: 1
    },
    cardOverlay: {
        // ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    label: {
        color: '#eeeeee',
        fontWeight: '600'
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    row: {
        flexDirection: 'row'
    },
    cvv: {
        marginStart: 20
    },
    floatingButton: {
        width: 50,
        height: 50,
        borderRadius: 25,

        backgroundColor: 'white',
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        // center item
        justifyContent: 'center',
        alignItems: 'center',
        //shadow
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.5,
        //
        elevation: 4
    },

})