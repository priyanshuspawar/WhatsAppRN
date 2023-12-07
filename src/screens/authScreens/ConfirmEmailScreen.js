import {useState,useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInputEmail from '../../components/CustomInputEmail';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import { Auth } from 'aws-amplify';
import { useForm } from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const processValue = (objectOfValues) => {
    const valuesArr = Object.values(objectOfValues)
    const final = valuesArr.join("")
    return final

  }
  const { control, setFocus, getValues, watch } = useForm({ defaultValues: { "field0": "", "field1": "", "field2": "", "field3": "", "field4": "", "field5": "", } });

  useEffect(() => {
    const subscription = watch((value) =>
      setCode(value)
    )
    return () => subscription.unsubscribe()
  }, [watch])
  

  const navigation = useNavigation();

  const onConfirmPressed = async () => {
    console.log(processValue(code))
    // try {
    //   const response = await Auth.confirmSignUp("priyanshusingh306@gmail.com","147619")
    //   console.log(response)
    // } catch (error) {
    //   Alert.alert("Oops",error.message)
    // }

  };

  const onSignUpPress = () => {

    // navigation.navigate('SignUp');
  };

  const onResendPress = async () => {
    try {
      
      const response = await Auth.resendSignUp("priyanshusingh306@gmail.com")
      Alert.alert("Code Sent")
    } catch (error) {
      Alert.alert(error.message)
    }
  };

  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInputEmail
          placeholder="Enter your confirmation code"
          setValue={setCode}
          control={control}
          setFocus={setFocus}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
          
        />

        <CustomButton
          text="Back to Sign Up"
          onPress={onSignUpPress}
          type="TERTIARY"
          
        />
      </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    flex:1,
    justifyContent:"center",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#075E55',
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

export default ConfirmEmailScreen;
