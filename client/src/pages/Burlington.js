import React from "react";
import { SButton } from "../components/styles.js";
import Burlington_Traffic from "../assets/traffic_plots/Burlington_Traffic.png"
import Burlington_Crash from "../assets/crash_plots/Burlington_Crash.png"


const Burlington = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Burlington</h1>
            <img src={Burlington_Traffic} alt="Should be a plot :)"/>
            <img src={Burlington_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Burlington;