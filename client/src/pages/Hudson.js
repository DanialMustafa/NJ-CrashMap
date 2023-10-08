import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Hudson_Traffic from "../assets/traffic_plots/Hudson_Traffic.png"
import Hudson_Crash from "../assets/crash_plots/Hudson_Crash.png"


const Hudson = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Hudson</h1>
            <img src={Hudson_Traffic} alt="Should be a plot :)"/>
            <img src={Hudson_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Hudson;