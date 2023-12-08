import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatsScreen from "../screens/ChatsScreen";
import ChatScreen from "../screens/ChatScreen";
import MainTabNavigator from "./MainTabNavigator";
import Header from "../components/Header";
import WelcomeScreen from "../screens/authScreens/WelcomeScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import ConfirmEmailScreen from "../screens/authScreens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/authScreens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/authScreens/NewPasswordScreen";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  const {authObject} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {authObject?
    <>
      <Stack.Navigator initialRouteName="Main">

        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Chats" component={ChatsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Chat" component={ChatScreen} options={{headerBackVisible:true,headerBackTitle:"Back"}}/>
        </Stack.Navigator>
    </> :
    <>
      <Stack.Navigator initialRouteName="welcome">

        <Stack.Screen name="welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="signIn" component={SignInScreen} options={{headerShown:false}}/>
        <Stack.Screen name="confirmEmail" component={ConfirmEmailScreen} options={{headerShown:false}}/>
        <Stack.Screen name="newPassword" component={NewPasswordScreen} options={{headerShown:false}}/>
        <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} options={{headerShown:false}}/>
        <Stack.Screen name="signUp" component={SignUpScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    
    </> 
    
    }


    </NavigationContainer>
  );
};

export default Navigator;
