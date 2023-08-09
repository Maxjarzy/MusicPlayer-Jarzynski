import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import {colors} from '../../assets/Colors/Colors'

const LoginScreen = ({navigation}) => {

    const onSubmit = () => {
        
    }
  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <InputForm 
                label={"Email"}
                onChange={()=>{}}
                error={""}
            />
            <InputForm 
                label={"Password"}
                onChange={()=>{}}
                error={""}
                isSecure={true}
            />
            <SubmitButton 
                onPress={onSubmit}
                title = "Send"
            />
            <Text style={styles.sub}>Not have an account?</Text>
            <Pressable onPress={()=> navigation.navigate('Signup')}>
                <Text style={styles.subLink}>Sign up</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.catDarkness
    },
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.catDarkness,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Noto-Sans-Bold"
    },
    sub: {
        fontSize: 16,
        color: colors.nigth,
        fontFamily: "Noto-Sans"
    },
    subLink: {
        fontSize: 14,
        color: colors.sun,
    }
})