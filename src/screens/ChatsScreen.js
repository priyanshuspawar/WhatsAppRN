import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatListItem from '../components/ChatListItem'
import chats from "../../assets/data/chats.json"
const ChatsScreen = () => {
    const chat = [{
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
      }]
    return (
    <FlatList
    data={chats}
    renderItem={({item})=><ChatListItem chat={item}/>
  }
  style={{backgroundColor:"white"}}
    />
  )
}

export default ChatsScreen

const styles = StyleSheet.create({})