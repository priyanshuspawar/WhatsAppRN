import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SignUpField from "../../components/SignUpField";

const SignUpScreen = () => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS==="ios" ?-270:-160}
      behavior={"position"}
      contentContainerStyle={{flex:1}}
      style={{ flex: 1 }}
    >

    <View>
      <View style={styles.banner}>
        <Ionicons name="logo-whatsapp" size={45} color="white" />
        <Text style={styles.whatsappTitle}>WhatsApp</Text>
      </View>

      <SignUpField />
    </View>
      {/* </View> */}
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFEFE",
    alignItems: "center",
    flex: 1,
    position: "relative",
  },
  banner: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#1BD741",
    paddingVertical: "25%",
    gap: 6,
    // marginBottom: "15%",
  },
  whatsappTitle: {
    color: "white",
    fontSize: 25,
  },
  // KeyboardAvoidingViewStyle:{
  //   borderWidth:1,
  //   flex:1,
  //   width:"100%",
  //   paddingVertical:60
  // }
});
