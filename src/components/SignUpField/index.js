import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState, useRef } from "react";
import CustomInput from "../../components/CustomInput";
import SignUpButton from "../../components/SignUpButton";
import CustomInputPhone from "../../components/CustomInput/CustomInputPhone";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpField = () => {
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: { userName: "", phone: "", emailAddress: "", password: "" },
  });
  const navigator = useNavigation();
  async function handleSignUp( userName, password, emailAddress, phone ) {
    try {
      console.log("@@",userName,emailAddress)
      const { isSignUpComplete, userId, nextStep } = await Auth.signUp({
        username:emailAddress,
        password:password,
        attributes:{email:emailAddress,phone_number:phone,preferred_username:userName}
        // username,
        // password,
        // attributes:{emai:emailAddress,phone_number:phone,preferred_username:username}
      });
      navigator.navigate("confirmEmail")
      console.log(userId,isSignUpComplete,nextStep);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }
  return (
    <SafeAreaView style={styles.fieldsContainer}>
      <Text style={styles.title}>Create a New Account</Text>

      {/* <CustomInput fieldTitle={"Phone"} value={email} setValue={(value)=>{setEmail(value)}} secureEntryEnable={false} forPhone={true}/> */}
      <CustomInputPhone
        fieldTitle={"phone"}
        rules={{
          minLength:{
            value:10,
            message:"Phone number should be of 10 digits"
          }
        }}
        control={control}
        placeholder={"Phone"}
        submitEdit={() => {
          setFocus("userName");
        }}
      />
      <CustomInput
        fieldTitle={"userName"}
        placeholder={"Username"}
        control={control}
        rules={{
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Username should be at least 3 characters long",
          },
          maxLength: {
            value: 16,
            message: "Username should be max 16 characters long",
          },
        }}
        secureEntryEnable={false}
        submitEdit={() => {
          setFocus("emailAddress");
        }}
      />
      <CustomInput
        fieldTitle={"emailAddress"}
        placeholder={"Email Address"}
        rules={{
          required: "Email is required",
          pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
        }}
        control={control}
        secureEntryEnable={false}
        submitEdit={() => {
          setFocus("password");
        }}
      />
      <CustomInput
        fieldTitle={"password"}
        placeholder={"Password"}
        secureEntryEnable={true}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password should be at least 8 characters long',
          },
        }}
        submitEdit={() => {}}
        control={control}
      />

      <SignUpButton
        width={"75%"}
        title={"Sign Up"}
        onPress={handleSubmit(({ phone,emailAddress,userName,password }) => {
          phone = `+91${phone}`
          console.log(userName)
          handleSignUp(userName,password,emailAddress,phone)
          
        })}
      />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#075E55", fontWeight: "500" }}>
          Already have an account ?{" "}
        </Text>
        <Pressable
          onPress={() => {
            navigator.navigate("signin");
          }}
        >
          <Text style={{ color: "#075E55", fontWeight: "bold" }}>
            Login Here
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUpField;

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
    marginTop: 60,
  },
});
