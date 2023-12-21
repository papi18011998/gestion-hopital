import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import Message from '../Message';
import Parametres from '../Parametres';
import { COLORS } from '../../outils/constantes';


const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      inactiveColor='#000000'
      activeColor="#FFFFFF"
      barStyle={{ backgroundColor: COLORS.main }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat-processing-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Parametres"
        component={Parametres}
        options={{
          tabBarLabel: 'Paramètres',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tools" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;