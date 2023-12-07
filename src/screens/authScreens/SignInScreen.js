import { StyleSheet, Text, SafeAreaView,View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef, useEffect } from "react";
import CustomInput from "../../components/CustomInput";
import SignUpButton from "../../components/SignUpButton";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useForm} from 'react-hook-form';


const SignInScreen = () => {
  const {control, handleSubmit, watch,setFocus} = useForm({ defaultValues: { emailAddress: "",password:"" } });
  const navigator = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <SafeAreaView style={{width:"100%" , alignItems:"center",flexDirection:"row",justifyContent:"space-between",marginTop:30,marginBottom:20}}>
            <Ionicons name="arrow-back-outline" size={20} color="white" onPress={()=>{navigator.goBack()}} />
            <View style={{flexDirection:"row",alignItems:"center",gap:6}}>
                <Ionicons name="logo-whatsapp" size={30} color="white" />
                <Text style={styles.whatsappTitle}>WhatsApp</Text>
            </View>
            <Ionicons name="ios-options-outline" size={20} color="white" />
        </SafeAreaView>
      </View>
      <Text style={styles.title}>Enter your credentials</Text>
      <CustomInput
        fieldTitle={"emailAddress"}
        placeholder={"Email Address"}
        control={control}
        secureEntryEnable={false}
        submitEdit={()=>{setFocus("password")}}

      />
      <CustomInput
        fieldTitle={"password"}
        placeholder={"Password"}
        secureEntryEnable={true}
        submitEdit={()=>{}}
        control={control}

      />
      <SignUpButton title={"LOG IN"} width={"75%"} onPress={handleSubmit((data)=>console.log(data))}/>
      <View style={{ flexDirection: "row" }}>
      <Text style={{ color: "#075E55", fontWeight: "500" }}>
        Don't have an account ?{" "}
      </Text>
      <Pressable onPress={()=>{navigator.navigate("signup")}}>
      <Text style={{ color: "#075E55", fontWeight: "bold" }}>
        Sign Up Here
      </Text>
      </Pressable>
    </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#075E55",
    fontSize: 20,
    fontWeight: "600",
    marginTop:40,
    marginBottom:20
  },  banner: {
    width: "100%",
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#1BD741",
    // height: "10%",
    paddingHorizontal:20,
    gap: 6,
    // marginBottom: "15%",
  },
  whatsappTitle: {
    color: "white",
    fontSize: 25,
  },
});
