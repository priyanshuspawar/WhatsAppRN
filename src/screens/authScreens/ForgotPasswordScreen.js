import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm({defaultValues:{userName:""}});
  const navigation = useNavigation();

  const onSendPressed = async data => {
    try{
      const response = await Auth.forgotPassword(data.userName)
      console.log(response)
    // navigation.navigate('NewPassword');
  }
  catch(e){
    Alert.alert("oops",e.message)
  }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
        fieldTitle={"userName"}
        placeholder={"Username"}
        control={control}
        rules={{
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Username is invalid",
          },
          maxLength: {
            value: 30,
            message: "Username is invalid",
          },
        }}
        secureEntryEnable={false}
        submitEdit={() => {
          
        }}
      />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    // </ScrollView>
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

export default ForgotPasswordScreen;
