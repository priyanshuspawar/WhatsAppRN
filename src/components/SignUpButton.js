import { StyleSheet, Text, View,Pressable,TouchableOpacity } from 'react-native'
import React from 'react'

const SignUpButton = ({width,onPress,title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer,{width:width}]}>
    <View>
      <Text style={styles.buttonTitleStyle}>{title}</Text>
    </View>
    </TouchableOpacity>
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