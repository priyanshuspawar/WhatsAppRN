import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatsScreen from "../screens/ChatsScreen";
import ChatScreen from "../screens/ChatScreen";
import MainTabNavigator from "./MainTabNavigator";
import Header from "../components/Header";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Chats" component={ChatsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Chat" component={ChatScreen} options={{headerBackVisible:true,headerBackTitle:"Back"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
