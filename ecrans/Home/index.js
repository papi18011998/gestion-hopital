import { View, Text, ScrollView, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import './style';
import { dashboardStyle } from './style';
import { COLORS } from '../../outils/constantes';
import { activites } from '../../fixtures/activities';
import ActivityItem from '../../composants/ActivityItem';
import SymptomeItem from '../../composants/SymptomeItem';
import { symptomes } from '../../fixtures/symptomes';
import { doctors } from '../../fixtures/doctors';

const Home = ({navigation}) => {
  const getDoctors = ()=>{
    navigation.navigate('Message')
  }
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

      {/* Liste des symptomes */}
          <View style={dashboardStyle.title}>
              <Text style={dashboardStyle.titleBold} >Quel symptome avez-vous ?</Text>
          </View>
          <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={dashboardStyle.scrollableList}
            data={symptomes}
            keyExtractor={item => item.id}
            renderItem={({item})=>{
              return <SymptomeItem symptome={item} />
            }}
          /> 
      {/* Fin liste des symptomes */}

      {/* Nos docteurs */}
          <View style={dashboardStyle.title_space_between}>
              <Text style={dashboardStyle.titleBold} >Nos Docteurs</Text>
              <TouchableOpacity onPress={getDoctors}>
                <Text style={dashboardStyle.link} >Afficher plus</Text>
              </TouchableOpacity>
          </View>
          <View style={dashboardStyle.doctorsContainer}>
            {
              doctors.splice(0,3).map((item)=>{
                return <TouchableOpacity key={item.id} style={dashboardStyle.doctorCard}>
                          <Image source={{ uri: `${item.image}`}} style={dashboardStyle.doctorImg}/>
                          <View style={dashboardStyle.doctorInfo} >
                            <Text style={dashboardStyle.doctorName}>{item.fullName}</Text>
                            <Text style={dashboardStyle.doctorSpec}>{item.specialite}</Text>
                          </View>
                       </TouchableOpacity>
              })
            }
          </View>
      {/* Fin de liste */}
    </ScrollView>
  )
}

export default Home;