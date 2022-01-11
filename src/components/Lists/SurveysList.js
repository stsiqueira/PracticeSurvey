import React from 'react'
import { Text, StyleSheet, TouchableOpacity} from 'react-native'

const SurveysList = ({ name, handleSurvey }) => {

    return (
        <TouchableOpacity style={styles.surveyContainer} onPress={() => handleSurvey(name)}>
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

export default SurveysList
const styles = StyleSheet.create({
    surveyContainer: {
        padding:24,
        backgroundColor: '#ccc',
        borderRadius:10
    },
  });