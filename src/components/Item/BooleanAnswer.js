import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
    radioButtonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    booleanAnswers:{
        fontSize:30
    }
})

const BooleanAnswer = ({ saveAnswers, question, checked, setChecked, flag, setFlag}) => {
    const handleRadioButton = (value) => {
        setChecked(value)
        saveAnswers(question, value)
    }
    return (
        <View style={styles.radioButtonsContainers}>
        
            <TouchableOpacity style={styles.radioButtonContainer} onPress={() => handleRadioButton('yes')}>
                {
                checked === 'yes' ? 
                
                <Icon name="circle" color="#000"  size={30}/>
                    :
                <Icon name="circle-thin" color="#000"  size={30}/>
                }
                <Text style={styles.booleanAnswers}> Yes </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioButtonContainer} onPress={() => handleRadioButton('no')}>
                {
                checked === 'no' ? 
                
                <Icon name="circle" color="#000"  size={30}/>
                    :
                <Icon name="circle-thin" color="#000"  size={30}/>
                }
                <Text style={styles.booleanAnswers}>  No </Text>
            </TouchableOpacity>

        </View>
    )
}

export default BooleanAnswer
