import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const SignUpButton = ({width,onPress,title}) => {
  return (
    <Pressable onPress={onPress} style={[styles.buttonContainer,{width:width}]}>
    <View>
      <Text style={styles.buttonTitleStyle}>{title}</Text>
    </View>
    </Pressable>
  )
}

export default SignUpButton

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor:"#1BD741",
        // width:"80%",
        borderRadius:5,
        marginVertical:20,
        paddingVertical:12,
        alignItems:"center"
    },
    buttonTitleStyle:{
        color:"white",
        fontWeight:"600",
        fontSize:18
    }
})