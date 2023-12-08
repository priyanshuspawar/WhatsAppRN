import { createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

// async storage functions
const storeDataStorage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('userAuth', jsonValue);
    } catch (e) {
      // saving error
      console.warn("async storage write error",e.message)
    }
  };
const getDataStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userAuth');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.warn("async storage read error",e.message)
    }
  };
const clearAllStorage = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
      console.warn(e.message)
    }
  
    console.log('Done. storage clear')
  }



export {storeDataStorage,getDataStorage,clearAllStorage}

export const AuthContext = createContext("");

