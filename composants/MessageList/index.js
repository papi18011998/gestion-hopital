import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/esm/plugin/relativeTime'

dayjs.extend(relativeTime)

const MessageList = ({message, navigation}) => {
  const goToDetails = ()=> {
      navigation.navigate('MessageDetails',{message});
  }
  return (
    <TouchableOpacity style={style.messageContainer} onPress={goToDetails}>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={style.messageImg}/>
      <View style={style.messageInfo} >
        <View style={style.dateName}>
            <Text style={style.name}>{message.fullName}</Text>
            <Text>{dayjs(message.date).fromNow(true)}</Text>
        </View>
        <Text>{message.last_message}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MessageList