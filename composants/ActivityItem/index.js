import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { style } from './style';

const ActivityItem = ({activity}) => {
  return (
            <TouchableOpacity style={style.scrollableItem}>
                <Image source={require('../../assets/hopital.png')} style={style.topCardImg} />
                <Text style={style.mainText}>{activity.mainText}</Text>
                <Text style={style.subText}>{activity.subText}</Text>
            </TouchableOpacity>
  );
}

export default ActivityItem;