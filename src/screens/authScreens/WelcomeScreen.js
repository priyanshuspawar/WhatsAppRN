import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import { SafeAreaView } from 'react-native-safe-area-context'


const WelcomeScreen = () => {
  const navigator = useNavigation();
  return (
  
    <SafeAreaView style={styles.container} edges={["top"]}>
    
      <Image style={{width:"80%"}} resizeMode={"contain"} source={require("../../../assets/images/whatsappArt.jpeg")}/>
      <Text style={styles.title}>Welcome to WhatsApp</Text>
      {/* description */}
      <View style={styles.description}>
        <View style={{flexDirection:"row"}}>
        <Text>Read our</Text>
        <Text style={{color:"#0779FF"}}> Privacy Policy</Text>
        <Text>. Tap "Agree & Continue"</Text>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text>to accept the</Text>
        <Text style={{color:"#0779FF"}}> terms and conditions </Text>
        </View>
      </View>


      <Text style={styles.subtitle} onPress={()=>navigator.navigate("signup")}>Agree & Continue</Text>
    </SafeAreaView>
 
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"#FEFEFE",
        alignItems:"center"
    },
    description:{
      textAlign:"center",
      // flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      marginBottom:40,
      gap:2
    },
    title:{
      fontWeight:"bold",
      fontSize:25,
      marginBottom:20
    },
    subtitle:{
      fontSize:20,
      color:"#0779FF",
      fontWeight:"500"
    }
})