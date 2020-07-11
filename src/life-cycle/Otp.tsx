import React, { Component } from 'react';
import {
    Text, SafeAreaView, Image, TouchableOpacity, View, SegmentedControlIOSComponent, StyleSheet, TextInput, Button
} from 'react-native';

interface FTimerProps {
    /**
     * call when counter state changed with current counter value
     */
    onCounterChanged: (counterValue: number) => void
}

const FTimer: React.FC<FTimerProps> = (props, ref) => {
    const { onCounterChanged } = props
    const [counter, setCounter] = React.useState(5)
    const [dummy, setDummy] = React.useState(60)

    const publicMethod = {
        reStartTimer: () => {
            setCounter(60)
            timerRef.current = setInterval(() => {
                setCounter(currentCounter => {
                    if (currentCounter === 1) {
                        // clear interval
                        if (timerRef.current) {
                            clearInterval(timerRef.current)
                        }
                    }
                    return currentCounter - 1
                })
            }, 1000)
        },
        dumy: () => {

        }
    }

    React.useImperativeHandle(ref, () => publicMethod)

    /**
     * ## useRef
     * See full document at : https://reactjs.org/docs/hooks-overview.html
     * 
     * Tạo một biến không bị re defind sau mỗi lần re render 
     */
    const timerRef = React.useRef<number>()
    const componentWillUnmount = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
    }
    const componentDidMount = () => {
        console.warn('callBackAfterFirstRender')
        timerRef.current = setInterval(() => {
            setCounter(currentCounter => {
                if (currentCounter === 1) {
                    // clear interval
                    if (timerRef.current) {
                        clearInterval(timerRef.current)
                    }
                }
                return currentCounter - 1
            })
        }, 1000)
        return componentWillUnmount
    }

    /**
     * ## useEffect
     * See full document at : https://reactjs.org/docs/hooks-overview.html
     * 
     * Gọi handler nếu các biến thay đổi giá trị
     * Nếu truyền array rỗng thì sẽ gọi vào lần render đầu tiên
     * Có thể return 1 cleanup function, clean up sẽ đc gọi khi compoennt bị un mount
     */
    React.useEffect(componentDidMount, [])

    const counterTracking = () => {
        onCounterChanged(counter)
    }

    // 
    React.useEffect(counterTracking, [counter])

    return (
        <>
            <Text

                style={{
                    textAlign: 'center',
                    marginTop: 10,
                    fontSize: 14,
                    color: 'red'
                }}
            >
                {counter} s
            </Text>
            <View style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
            }}
            >
                <Button
                    onPress={() => { }}
                    title='Verify otp'
                />
            </View>
        </>
    )
}

const FTimerRefAble = React.forwardRef(FTimer)

export const OtpView: React.FC = (props) => {
    const [showReSendButton, setShowReSendButton] = React.useState(false)
    const [otp, setOtp] = React.useState('1234')
    const timerRef = React.useRef<FTimer>()
    const onCounterChanged = (value: number) => {
        if (value === 0 && showReSendButton === false) {
            setShowReSendButton(true)
        }
        if (value > 0 && showReSendButton === true) {
            setShowReSendButton(false)
        }
    }
    const renderButton = () => {
        if (!showReSendButton) return null
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                    onPress={() => { timerRef.current.reStartTimer() }}
                    style={{ fontSize: 18, color: 'blue', paddingTop: 30, textDecorationLine: 'underline' }}
                >Send the code again</Text>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{ backgroundColor: 'white', flexDirection: 'column', justifyContent: "center", flex: 1 }}
        >
            <View style={styles.container}>
                <View style={[styles.box]}>
                    <Text style={styles.text}>{otp[0]}</Text>
                </View>
                <View style={[styles.box, styles.box_green]}>
                    <Text style={styles.text}>{otp[1]}</Text>
                </View>
                <View style={[styles.box, styles.box_blue]}>
                    <Text style={styles.text}>{otp[2]}</Text>
                </View>
                <View style={[styles.box, styles.box_yellow]}>
                    <Text style={styles.text}>{otp[3]}</Text>
                </View>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TextInput
                    value={otp}
                    onChangeText={setOtp}
                    style={{
                        backgroundColor: 'white',
                        borderColor: 'blue', borderWidth: 2, width: '80%', height: 40, fontSize: 20
                    }}
                />
            </View>
            <FTimerRefAble ref={timerRef} onCounterChanged={onCounterChanged} />
            {renderButton()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center", // căn item
        //flex:1, // 
        //alignSelf:"center",
        margin: 30,
        borderRadius: 20,
        //opacity:0.5 // làm mờ nền
    },
    box: {
        backgroundColor: 'red',
        width: 70, height: 70,
        justifyContent: "center",
        borderRadius: 20, borderWidth: 1
    },
    box_green: {
        backgroundColor: 'green',
    },
    box_blue: {
        backgroundColor: 'blue',
    },
    box_yellow: {
        backgroundColor: 'yellow',
    },
    text: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    }
});