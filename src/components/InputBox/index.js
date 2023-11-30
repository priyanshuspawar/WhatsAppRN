import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");
  const onSend = () => {
    console.log("message sent",newMessage);
    setNewMessage("")
  };
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput
        style={[styles.input,Platform.OS === "ios"?{maxHeight:70}:{}]}
        value={newMessage}
        numberOfLines={2}
        onChangeText={setNewMessage}
        multiline
        placeholder="Type your message"
        placeholderTextColor={"lightgrey"}
        scrollEnabled
      />
      <MaterialIcons
        style={styles.send}
        name="send"
        size={24}
        color="white"
        onPress={onSend}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 18,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  send: {
    backgroundColor: "royalblue",
    padding: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
  },
});
