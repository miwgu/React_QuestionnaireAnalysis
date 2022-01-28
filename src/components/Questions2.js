import axios from "axios";
import React from "react";
import {useState, useEffect} from 'react'
import{Scrollbars} from 'react-custom-scrollbars'


const Questions=() => {

    
     const [questions, setQuestions]= useState(
        [
           /* {
                id:1,
                num: 'q1',
                text: 'xxxxxxxxx',
            },
            {
                id:2,
                num: 'q2',
                text: 'xxxxxxxxx',
            },
            {
                id:3,
                num: 'q3',
                text: 'xxxxxxxxx',
            },
            {
                id:4,
                num: 'q4',
                text: 'xxxxxxxxx',
            },

            {
                id:5,
                num: 'q5',
                text: 'xxxxxxxxx',
            }, 
*/
        ]
    ) 
    
 useEffect(()=>{
        axios.get('http://localhost:8080/question/bySurveyId/2')
        .then((res)=>{
            const questions =res.data;
            setQuestions(questions)
        })
        },[])
    

    return(
        <Scrollbars >
            {questions.map((question)=>(
                <p key={question.id}>{'Question'}{question.id-5}{': '}{question.text}</p>
            ))}
            </Scrollbars>
    )
            
            }
        
export default Questions