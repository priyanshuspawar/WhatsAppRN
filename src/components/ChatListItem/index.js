import { StyleSheet, Text, View, Image,Pressable } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";
dayjs.extend(relativeTime);

const ChatListItem = ({chat}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={()=>{navigation.navigate("Chat", {id: chat.id, name: chat.user.name})}}>
    <View style={styles.container}>
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.avatar}
      />
      {/* Content Container */}
      <View style={styles.content}>
        {/* Row */}
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>{chat.user?.name}</Text>
          <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow()}</Text>
        </View>

        <Text style={styles.subTitle} numberOfLines={2}>{chat.lastMessage.text}</Text>
      </View>
    </View>
    </Pressable>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"stretch",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    avatar:{
        width: 60,
        aspectRatio: 1,
        borderRadius: 30,
        marginRight: 10,
    },
    name:{
        fontWeight:"bold",
        
    },
    subTitle:{
        color:"grey"
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:5
    },
    content:{
        flex:1,
        borderBottomColor:"lightgrey",
        borderBottomWidth:StyleSheet.hairlineWidth
    },
});
