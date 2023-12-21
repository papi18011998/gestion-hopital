import { View, Text, TouchableOpacity, Image  } from 'react-native'
import React from 'react'
import { style } from './style'


const SymptomeItem = ({symptome}) => {
  return (
    <TouchableOpacity style={style.item}>
            <Image style={style.itemImg} source={require('../../assets/hopital.png')}/>
            <Text>{symptome.libelle}</Text>
    </TouchableOpacity>
  )
}

export default SymptomeItem