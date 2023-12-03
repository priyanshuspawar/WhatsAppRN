import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import {useState,useRef} from 'react'
import CustomInput from "../../components/CustomInput";
import SignUpButton from "../../components/SignUpButton";
import CustomInputPhone from "../../components/CustomInput/CustomInputPhone";

const SignUpField = () => {
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Phone, setPhone] = useState("");
  
    const EmailRef = useRef(null);
    const PasswordRef = useRef(null);
  return (
    <SafeAreaView style={styles.fieldsContainer}>
    <Text style={styles.title}>Create a New Account</Text>

    {/* <CustomInput fieldTitle={"Phone"} value={email} setValue={(value)=>{setEmail(value)}} secureEntryEnable={false} forPhone={true}/> */}
    <CustomInputPhone
      fieldTitle={"Phone"}
      value={Phone}
      setValue={(value) => {
        setPhone(value);
      }}
    />
    <CustomInput
      fieldTitle={"Email Address"}
      value={email}
      setValue={(value) => {
        setEmail(value);
      }}
      refAction={() => {
        PasswordRef.current.focus();
      }}
      secureEntryEnable={false}
      ref={EmailRef}
    />
    <CustomInput
      fieldTitle={"Password"}
      secureEntryEnable={true}
      value={Password}
      refAction={() => {
        PasswordRef.current.blur();
      }}
      setValue={(value) => {
        setPassword(value);
      }}
      ref={PasswordRef}
    />

    <SignUpButton width={"75%"} title={"Sign Up"} />
    <View style={{ flexDirection: "row" }}>
      <Text style={{ color: "#075E55", fontWeight: "500" }}>
        Already have an account ?{" "}
      </Text>
      <Text style={{ color: "#075E55", fontWeight: "bold" }}>
        Login Here
      </Text>
    </View>
  </SafeAreaView>
  )
}

export default SignUpField

const styles = StyleSheet.create({
 
      title: {
        color: "#075E55",
        fontSize: 20,
        fontWeight: "600",
      },
      fieldsContainer: {
        paddingVertical: 10,
        width: "100%",
        alignItems: "center",
        flexGrow: 1,
        gap: 10,
        marginTop:60
      },
})