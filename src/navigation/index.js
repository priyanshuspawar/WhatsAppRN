import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatsScreen from "../screens/ChatsScreen";
import ChatScreen from "../screens/ChatScreen";
import MainTabNavigator from "./MainTabNavigator";
import Header from "../components/Header";
import WelcomeScreen from "../screens/authScreens/WelcomeScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="signup" component={SignUpScreen} options={{headerShown:false}}/>
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
