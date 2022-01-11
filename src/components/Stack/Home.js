import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import SurveysList from '../Lists/SurveysList';
import { NavigationContainer } from '@react-navigation/native';




const Home = () => {
  const [surveys, setSurveys] = useState([])
  const dbUrl =   `http://localhost:5000`

  const fetchData = async (url, path) => {
    try {
      const response = await axios.get(url+path);
      setSurveys([response.data])
    } catch (err) {
      console.error(err);
    }
  }

  const handleSurvey = ({ name, navigation}) => {
      navigation.navigate('Survey')
  }

  useEffect(() => {
    fetchData(dbUrl, "/survey1")
  // fetchData(dbUrl, "/survey2")
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingTop:36, paddingLeft:24, marginBottom:24}}>
        <Text style={{fontWeight:'700', fontSize:52}}>Surveys</Text>
      </View>

      <View style={{backgroundColor:'#fff', flex:1, borderTopLeftRadius:30, borderTopRightRadius:30, padding:32}}>
        {surveys.map((survey, idx)=> (
          <SurveysList name={survey.name} key={idx} id={idx} handleSurvey={handleSurvey}/>
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});
