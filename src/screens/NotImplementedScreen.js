// src/screens/NotImplementedScreen.js

import { Auth } from 'aws-amplify';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { AuthContext, clearAllStorage } from '../contexts/authContext';
import { useContext } from 'react';

const NotImplementedScreen = () => {
  const {setAuthObject} = useContext(AuthContext)
  const onPressSignOut = async () =>{
    try {
      await Auth.signOut();
      await clearAllStorage();
      setAuthObject(null);
    } catch (error) {
      Alert.alert("Opps",error.message)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not Implemented!</Text>
      <Text style={styles.text} onPress={onPressSignOut}>Sign out</Text>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/capybara+copy.png',
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
  },
  image: {
    width: '80%',
    aspectRatio: 2 / 1,
  },
});

export default NotImplementedScreen;
