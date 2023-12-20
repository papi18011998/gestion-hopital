import { View, Text, ScrollView, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import './style';
import { dashboardStyle } from './style';
import { COLORS } from '../../outils/constantes';
import { activites } from '../../fixtures/activities';
import ActivityItem from '../../composants/ActivityItem';

const Home = () => {
  return (
    <ScrollView style={{backgroundColor:COLORS.content}}>
      {/* Debut du header */}
        <View style={dashboardStyle.headerStyle}>
          <Text style={dashboardStyle.userName}>Jonh Doe</Text>
          <Image source={require('../../assets/personne.jpg')} style={dashboardStyle.userImg}/>
        </View>
      {/* Fin du header */}

      {/* Liste des activites */}
        <FlatList 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={dashboardStyle.scrollableList}
          data={activites}
          keyExtractor={item => item.id}
          renderItem={({item})=>{
            return <ActivityItem activity={item}/>
          }}
        />  
      {/* Fin liste des activites */}
    </ScrollView>
  )
}

export default Home;