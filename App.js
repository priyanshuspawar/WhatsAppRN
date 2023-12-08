import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { AuthContext, getDataStorage } from './src/contexts/authContext';
import { useEffect, useState } from 'react';

Amplify.configure(awsconfig)

export default function App() {
  
  const [authObject, setAuthObject] = useState(undefined);

  const checkUser = async () =>{
    const response = await getDataStorage();
    if(response){
      console.log("@@",response)
      setAuthObject(response)
      return;
    }
    setAuthObject(null)
  

  }

  useEffect(() => {
    // AsyncStorage.getItem('DEMO_APP::COUNT_VALUE').then((value) => {
    //   if (value) {
    //     setCount(parseInt(value));
    //   }
    // });
    // getDataStorage()
    checkUser()
  }, []);


  if(authObject===undefined){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator color={"green"}/>
      </View>
    )
  }

  
  return (


    <AuthContext.Provider value={{authObject,setAuthObject}}>
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Navigator/>
    </View>
    </AuthContext.Provider>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: "stretch",
    justifyContent: 'center',
  },
});
