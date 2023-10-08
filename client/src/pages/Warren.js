import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Warren_Traffic from "../assets/traffic_plots/Warren_Traffic.png"
import Warren_Crash from "../assets/crash_plots/Warren_Crash.png"

const Warren = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Warren</h1>
            <img src={Warren_Traffic} alt="Should be a plot :)"/>
            <img src={Warren_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Warren;