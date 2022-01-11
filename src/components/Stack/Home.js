import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SurveysList from '../Lists/SurveysList';
import { fetchData } from '../../services/api';

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: '#ccc',
    },
    questionContainer:{
      backgroundColor:'#fff', 
      flex:1, 
      borderTopLeftRadius:30, 
      borderTopRightRadius:30, 
      padding:32
    },
    headerContainer:{
      paddingTop:36, 
      paddingLeft:24, 
      marginBottom:24
    },
    title:{
      fontWeight:'700', 
      fontSize:52
  }
});

const Home = ( {navigation}) => {

  const [surveys, setSurveys] = useState([])

  const fetch = async (path) => {
    const survey1 = await fetchData("survey1")
    const survey2 = await fetchData("survey2")
    setSurveys([survey1, survey2])
  }
  useEffect(fetch, [])

  const handleSurvey = (name) => {
    console.log(name)
    navigation.navigate("Survey", { name: name } )
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Surveys</Text>
      </View>

      <View style={styles.questionContainer}>
        {
        surveys.map((survey)=> (
          <SurveysList name={survey.name} key={survey.name} handleSurvey={handleSurvey}/>
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export default Home


