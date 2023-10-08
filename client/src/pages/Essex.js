import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Essex_Traffic from "../assets/traffic_plots/Essex_Traffic.png"
import Essex_Crash from "../assets/crash_plots/Essex_Crash.png"


const Essex = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Essex</h1>
            <img src={Essex_Traffic} alt="Should be a plot :)"/>
            <img src={Essex_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Essex;