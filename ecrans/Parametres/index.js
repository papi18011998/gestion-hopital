import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { parametres } from '../../fixtures/settings'
import { style } from './style'
import SettingItem from '../../composants/SettingItem'

const Parametres = () => {
  return (
    <View style={style.container}>
      {/* Header */}
      <View style={style.header}>
        <Image source={require('../../assets/personne.jpg')} style={style.image}/>
        <View style={style.userInfo}>
          <Text style={style.userName}>John DOE</Text>
          <Text style={style.userEmail}>john.doe@gmail.com</Text>
          <Text>+221 77 123 45 67</Text>
        </View>
      </View>
      <FlatList
        data={parametres}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item})=>{
          return <SettingItem setting={item}/>
        }}
      />
    </View>
  )
}

export default Parametres