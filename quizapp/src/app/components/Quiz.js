import { useContext, useEffect, useState } from "react"
import { DataContext } from "../page"
import QuestionsData from "@/data/QuestionsData"

const Quiz = ()=>{
    
    const [current,setCurrent] = useState(0)
    const [selectChoice,setSelectChoice] = useState("")
    const {score,setScore,setAppState} =  useContext(DataContext)

    useEffect(()=>{  //ตรวจสอบตัวเลือกว่าถูกมั้ยเมื่อเทียบกับเฉลย
        checkAnswer()
        //eslint-disable-next-line
    },[selectChoice])

    const checkAnswer=()=>{
        if(selectChoice!== ""){ //ตรวจสอบตัวเลือกว่าตรงกับกับเฉลยมั้ย
            if(selectChoice === QuestionsData[current].answer){
                setScore(score+1) //ตอบถูกได้คะแนน
                nextQuestion()//คำสั่งแสดงข้อคำถามถัดไป
            }else{
                nextQuestion()//คำสั่งแสดงข้อคำถามถัดไป
            }
        }
    }
const nextQuestion=()=>{ //คำสั่งแสดงข้อคำถามถัดไป
        setSelectChoice("") //ทำเป็นค่าว่างเพื่อเคลียร์คำถามไปข้อถัดไป
        if(current === QuestionsData.length-1){ //0-4เลขindexของอาร์เรย์ คำสั่งตรวจสอบว่าข้อสอบอยู่ที่ข้อสุดท้ายมั้ย
            setAppState("score") //สรุปผลคะแนน
        }else{
            setCurrent(current+1)
        }
    }

    return(
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectChoice("A")}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChoice("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz;