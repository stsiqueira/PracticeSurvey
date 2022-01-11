import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'
import Slider from '@react-native-community/slider';


const styles = StyleSheet.create({
    sliderContainer:{
        alignItems:'center'
    },
    slider:{
        width:'80%'
    },
    inputContainer:{
        flexDirection:'row',
    },
    input:{
        borderWidth:1,
        width:'25%',
        fontSize:50,
        color:'black'
    },
    sliderValue:{
        fontSize:24
    },
    unit:{
        fontSize:24,
        marginLeft:10,
    }
});

const SliderAnswer = ({answer_max, answer_min, question, saveAnswers, number, setNumber, sliderValue, setSliderValue}) => {


    const handleSlider = (value) => {
        setSliderValue(value)
        saveAnswers(question, value)
    }
    const handleInput = (value) => {
        setNumber(value)
        saveAnswers(question, value)
    }
    return (
     
        <View style={styles.sliderContainer}>
            {answer_max > 10 ? 
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                onChange={ e => handleInput(e)}
                value={number}
                keyboardType="numeric"/>
                <Text style={styles.unit}>min</Text>
            </View>
            :
            <>
                    <Text style={styles.sliderValue}>{sliderValue}</Text>
                    <Slider
                    style={styles.slider} 
                    value={sliderValue}
                    minimumValue={answer_min}
                    maximumValue={answer_max}
                    minimumTrackTintColor="#bbb"
                    maximumTrackTintColor="#eee"
                    onValueChange={(e) => handleSlider(e)}
                    step={1}
                    />
            </>
        }
        </View>  
    )
}

export default SliderAnswer
