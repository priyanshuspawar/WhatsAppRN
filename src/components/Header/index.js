import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons,AntDesign } from '@expo/vector-icons'; 

const Header = ({ layout, options }) => {
    // console.log(layout.height*0.10)
  return (
    <View style={[styles.container,{height:layout.height*0.18}]}>
      <View style={styles.row}>
      <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={24} color="#0080F7" />
        <View style={{flexDirection:"row",gap:15}}>
        <Ionicons name="ios-camera-outline" size={24} color="#0080F7" />
        <AntDesign name="pluscircle" size={24} color="#0080F7"/>
        </View>
      </View>
      <Text style={styles.headerTitleStyle}>Chats</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display:"flex",
    justifyContent:"center",
    padding:10,
    paddingVertical:20
    // marginVertical:10
  },
  headerTitleStyle:{
    fontWeight:"bold",
    fontSize:25
  },
  plusButton:{
    padding:5,
    backgroundColor:"#0080F7",
    borderRadius:20
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:5
  }
});
