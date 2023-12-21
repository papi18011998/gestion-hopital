import { View, Text } from 'react-native'
import React from 'react'
import { style } from './style'
import dayjs from 'dayjs'

const ConversationItem = ({conversation}) => {
  const isMine = ()=>{
    return conversation.user.id === 1;
  }; 

  return (
    <View style={[style.container,
     {
        backgroundColor: isMine()?'#DCF8C5':'white',
        alignSelf: isMine()? "flex-end": "flex-start"
     }]}>
      <Text>{conversation.message}{conversation.user.id}</Text>
      <Text style={{textAlign:'right'}} >{dayjs(conversation.createdAt).fromNow(true)}</Text>
    </View>
  )
}

export default ConversationItem