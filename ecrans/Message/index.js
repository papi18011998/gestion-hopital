import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { messages } from '../../fixtures/messages'
import MessageList from '../../composants/MessageList'
import { style } from './style'

const Message = ({navigation}) => {
  return (
    <FlatList
      data={messages}
      showsVerticalScrollIndicator= {false}
      style={style.root}
      keyExtractor={ item => item.id}
      renderItem={({item})=>{
        return <MessageList message={item} navigation={navigation}/>
      }}
    />
  )
}

export default Message