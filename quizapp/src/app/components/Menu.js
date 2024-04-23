import { useContext } from "react"
import { DataContext } from "../page"

const Menu = ()=>{
    const {setAppState} = useContext(DataContext)
    return(
        <div className="menu">
            <h1><b>แบบทดสอบก่อนเรียน</b></h1>
            <button onClick={()=>setAppState("quiz")}>เริ่มทำแบบทดสอบ</button>
        </div>
    )
}
export default Menu;