import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm({defaultValues:{code:"",password:""}});

  const navigation = useNavigation();

  const onSubmitPressed = async data => {
    try {
      const response = await Auth.forgotPasswordSubmit("priyanshusingh306@gmail.com",data.code,data.password)
      console.log(response)
    } catch (error) {
      Alert.alert("Ooops",error.message)
    }
    // navigation.navigate('Home');
  };

  const onSignInPress = () => {
    // navigation.navigate('SignIn');
  };

  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
       fieldTitle={"code"}
       placeholder={"Verification Code"}
       control={control}
       rules={{
         required: "Code is required",
         minLength: {
           value: 6,
           message: "Code is invalid",
         },
         maxLength: {
           value: 6,
           message: "Code is invalid",
         },
       }}
       secureEntryEnable={false}
       submitEdit={() => {
         
       }}
        />

        <CustomInput
        fieldTitle={"password"}
          placeholder="Enter your new password"
          name="name"
          control={control}
          secureTextEntry={true}
          submitEdit={()=>{}}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex:1,
    justifyContent:"center"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default NewPasswordScreen;
