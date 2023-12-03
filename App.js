import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';
import Navigator from './src/navigation';
import WelcomeScreen from './src/screens/authScreens/WelcomeScreen';

export default function App() {
  const chat = {
    id: "1",
    user: {
      image:
        "https://i.imgur.com/lsGiUDs.jpg",
      name: "Kritika",
    },
    lastMessage: {
      text: "Oke",
      createdAt: "07:30",
    },
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <ChatsScreen/> */}
      {/* <ChatScreen/> */}
      <Navigator/>
      {/* <WelcomeScreen/> */}
    </View>
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
