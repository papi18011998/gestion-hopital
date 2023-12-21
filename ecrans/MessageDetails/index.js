import { View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { conversations } from '../../fixtures/conversations';
import ConversationItem from '../../composants/Conversation';
import MessageInput from '../../composants/MessageInput';

const MessageDetails = ({route,navigation}) => {
  const {message} = route.params  
  useEffect(()=>{
    navigation.setOptions({title: message.fullName})
  });  
  return (
      <View style={{flex:1}}>
        <FlatList
            data={conversations}
            keyExtractor={item=> item.id}
            renderItem={({item})=>{
                return <ConversationItem conversation={item}/>
            }}
        />
        <MessageInput/>
      </View>  
  )
}

export default MessageDetails