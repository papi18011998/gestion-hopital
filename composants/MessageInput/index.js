import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageInput = () => {
  return (
    <View style={style.container}>
      <TextInput style={style.input} placeholder='Laisser un message'/>
      <TouchableOpacity>
        <MaterialCommunityIcons name="send"  size={26} style={style.send} />
      </TouchableOpacity>
    </View>
  )
}

export default MessageInput