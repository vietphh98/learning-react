import React from "react"
import { DurationTime } from "./durationTime"

export const HistoryLaps=(props)=>{
    const {listLaps} = props
    return <div style={{background:'white',padding:10,marginTop:20,borderRadius:10}}>
        <div style={{fontSize:24, textAlign:'center',marginTop:5}}>Laps</div>
        {listLaps?.slice(0,10)?.map((time) => <span><DurationTime durationMs={time}/></span>)}
    </div>
}