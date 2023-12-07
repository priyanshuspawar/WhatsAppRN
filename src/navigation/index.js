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
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="confirmEmail">
        {/* <Stack.Screen name="welcome" component={WelcomeScreen} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name="signIn" component={SignInScreen} options={{headerShown:false}}/> */}
        <Stack.Screen name="confirmEmail" component={ConfirmEmailScreen} options={{headerShown:false}}/>
        <Stack.Screen name="signUp" component={SignUpScreen} options={{headerShown:false}}/>
        {/* <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Chats" component={ChatsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Chat" component={ChatScreen} options={{headerBackVisible:true,headerBackTitle:"Back"}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
