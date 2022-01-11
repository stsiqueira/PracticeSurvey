import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import axios from 'axios'

const Survey = () => {
    const name = "Survey1"
    const dbUrl =   `http://localhost:5000`
    const [ survey, setSurvey ] = useState()
    const tifs = {1: 'Joe', 2: 'Jane'};

    const fetchData = async (url, path) => {
        try {
          const response = await axios.get(url+path);
          setSurvey(response.data)
        } catch (err) {
          console.error(err);
        }
      }
    useEffect(() => {
        fetchData(dbUrl, "/survey1")
    }, [])

    const handleButton = () => {
        // console.log("All questions", survey.questions)
        // console.log(survey.questions.size)
       for (const key of Object.keys(survey)){
           console.log(`${key} => ${survey[key]} `)
       }
    }

    return (
        <View>
            <Text>Survey</Text>

            {
                Object.keys(tifs).map((key) => {
                    return <Text value={key} key={key}>{tifs[key]}</Text>
                })
            }
            {/* {
                Object.keys(survey).map((key) => {
                    return <Text value={key} key={key}>{survey[key]}</Text>
                })
            } */}


            <Button onPress={()=> handleButton()} title="Next Question"/>
        </View>
    )
}

export default Survey
