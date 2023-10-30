import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';

function Login({navigation}) {
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <Image
                    style={styles.img}
                    source={require('../assets/icons.png')}
                />
            </View>
            <TextInput placeholder="Username" style={styles.input}></TextInput>
            <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry
                returnKeyType="done"
                keyboardType="email-address"
            ></TextInput>
            <View style={styles.btn}>
                <Button
                    title="로그인"
                    onPress={() => navigation.navigate('Join')}
                />
                <Button
                    title="카카오 로그인"
                    onPress={() => Alert.alert('카카오 로그인')}
                />
            </View>
            <View style={styles.others}>
                <TouchableOpacity onPress={() => navigation.navigate('Join')}>
                    <Text>회원가입</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>비밀번호 찾기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 100,
        height: 100,
    },
    input: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginVertical: 20,
        fontSize: 18,
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    }
});


export default Login;