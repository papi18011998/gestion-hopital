import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../outils/constantes';

const SettingItem = ({setting}) => {
  return (
    <TouchableOpacity style={style.container}>
      <Text>{setting.libelle}</Text>
      <MaterialCommunityIcons name="arrow-right" color={COLORS.main} size={26}/>
    </TouchableOpacity>
  )
}

export default SettingItem