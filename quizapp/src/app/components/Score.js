import { useContext} from "react"
import { DataContext } from "../page"
import QuestionsData from "@/data/QuestionsData"

const Score = ()=>{
    const {score,setAppState,setScore} = useContext(DataContext)

    const restartApp=()=>{
        setScore(0)
        setAppState("menu")
    }
    return(
        <div className="score">
            <h1><b>สรุปผลคะแนนสอบ</b></h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    )
}

export default Score;