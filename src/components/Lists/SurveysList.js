import React from 'react'
import { Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const SurveysList = ({ name, handleSurvey }) => {

    return (
        <TouchableOpacity style={styles.surveyContainer} onPress={() => handleSurvey(name)}>
            <Text style={styles.text}>{name}</Text>
            <Icon name="chevron-right" color="#000"  size={24}/>
        </TouchableOpacity>
    )
}

export default SurveysList
const styles = StyleSheet.create({
    surveyContainer: {
        padding:24,
        backgroundColor: '#ccc',
        borderRadius:10,
        marginBottom:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        fontWeight:'700', 
        fontSize:20
    }
  });