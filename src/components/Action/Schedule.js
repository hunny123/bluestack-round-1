import React,{ useState} from 'react'
import { getInDDMMYYYYFormat }from '../../utility'
import "./action.css"

export default function Schedule(props) {
    const { date ,onChange,id,onClose} = props
    const [schedule,setSchedule] = useState(date)
    const onChangeLocal=(e)=>{
        
        const {value} = e.target
        
        const newTime = new Date(value).getTime()
        
        setSchedule(newTime)
       
    }
    const value=getInDDMMYYYYFormat(schedule) // getting correct format
    
    
    return (
        <div>
           <input  className="input" type="date" value={value} onChange={onChangeLocal}/>
           <button className="ok mx-1" onClick={
               ()=>{
                onChange(id,schedule)
                onClose(false)
               }
                }>&#10003;</button>
           <button className="ok " onClick={()=>onClose(false)}>X</button>
        </div>
    )
}
