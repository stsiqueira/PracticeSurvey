
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BooleanAnswer from './BooleanAnswer';
import SliderAnswer from './SliderAnswer';

const styles = StyleSheet.create({
    questionContainer:{
        backgroundColor:'#fff', 
        flex:1, 
        borderTopLeftRadius:30, 
        borderTopRightRadius:30, 
        padding:24,
        marginBottom:14,
        justifyContent:'space-around'
      },
    questionText:{
        paddingVertical:16,
        paddingHorizontal:24,
        fontSize:32
    },

})
const Question = ({ question, saveAnswers, flag, setFlag, checked, setChecked, sliderValue, setSliderValue, number, setNumber}) => {

    return (
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.question_text}</Text>
            {
                question.answer_type == "int" ?   
                <SliderAnswer 
                    answer_max={question.answer_max} 
                    answer_min={question.answer_min} 
                    saveAnswers={saveAnswers} 
                    question={question.question_text}
                    number={number}
                    setNumber={setNumber}
                    sliderValue={sliderValue}
                    setSliderValue={setSliderValue}/>
                :
                <BooleanAnswer 
                    question={question.question_text} 
                    saveAnswers={saveAnswers}
                    checked={checked}
                    setChecked={setChecked}
                    flag={flag}
                    setFlag={setFlag}/>
            }
        </View>
    )
}

export default Question


