import {
  StyleSheet,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(()=>{
    navigation.setOptions({title:route.params.name})
  },[route.params])
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bg}
    >
      <ImageBackground
        style={styles.bg}
        source={require("../../assets/images/BG.png")}
      >
        <FlatList
          data={messages}
          inverted
          style={{ padding: 10 }}
          renderItem={({ item }) => <Message message={item} />}
        />
        <SafeAreaView edges={["bottom"]}>
        <InputBox />
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
