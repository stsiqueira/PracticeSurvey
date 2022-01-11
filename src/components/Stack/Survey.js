import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import axios from 'axios'
import { dbUrl } from '../../services/api'
import Question from '../Item/Question'
import Icon from 'react-native-vector-icons/FontAwesome';


const insertName = ( [name, value]) =>( {...value, name} )

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:24,
        backgroundColor:'#fff',
        paddingBottom:32
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

const Survey = ({ route, navigation }) => {
    const { name } = route.params;

    const [ survey, setSurvey ] = useState()
    const [ answers, setAnswers ] = useState({})
    const [ questionIdx, setQuestionIdx ] = useState(0)

    const [checked, setChecked] = useState('');
    const [sliderValue, setSliderValue] = useState(" ")
    const [number, setNumber] = useState(" ");
    const [ flag, setFlag] = useState(0)



    const fetchData = async () => {
        try {
            const response = await axios.get(dbUrl+name);
            const data = {
                ...response.data, 
                questions: Object.entries(response.data.questions).map( insertName ) 
            }
            setSurvey(data)
        } catch (err) {
            console.error(err);
        }
      }
    useEffect(fetchData, [])
    
    const saveAnswers = ( key, value ) => {
        setAnswers({...answers, [key]:value})
        console.log("Answers=>", answers)
    }
    const reset = () => {
        navigation.navigate("Home")
        setAnswers({})
    }
    const printAnswers = () => {
        navigation.navigate("Home")
        console.log(answers)
        setAnswers({})
    }
    const checkAnswer = (des) => {
        if(survey.questions[questionIdx].answer_type === 'int'){
            if(sliderValue !== " "){
                handleButton(des)
            }
        }else{
            if(checked !== ''){
                handleButton(des)
            }
        }
    }
    const handleButton = (des) => {
        switch (des) {
            case -1:
                questionIdx <= 0 ? reset() : setQuestionIdx(questionIdx - 1)
                break;
            case 1:
                if (survey.questions[questionIdx].next_question.default == null) {
                    printAnswers()
                }else{
                    setQuestionIdx(questionIdx + 1)
                }
                // questionIdx == (survey.questions.length-1) ? setQuestionIdx(survey.questions.length - 1) : setQuestionIdx(questionIdx + 1)
                break;
        }
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{name ? name : ""}</Text>
            </View>
            {
                survey &&
                survey.questions.filter( ( _ ,  idx) => idx === questionIdx).map((cur)=>
                    <Question 
                        question={cur} 
                        key={cur.name} 
                        saveAnswers={saveAnswers} 
                        handleButton={handleButton}
                        checked={checked}
                        setChecked={setChecked}
                        number={number}
                        setNumber={setNumber}
                        sliderValue={sliderValue}
                        setSliderValue={setSliderValue}
                        flag={flag}
                        setFlag={setFlag}/>
                )
            }
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=> checkAnswer(-1)} > 
                    <Icon name="chevron-left" color="#000"  size={24}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> checkAnswer(1)} > 
                    <Icon name="chevron-right" color="#000"  size={24}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Survey
