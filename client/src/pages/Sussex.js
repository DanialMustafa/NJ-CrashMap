import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Sussex_Traffic from "../assets/traffic_plots/Somerset_Traffic.png"
import Sussex_Crash from "../assets/crash_plots/Sussex_Crash.png"

const Sussex = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Sussex</h1>
            <img src={Sussex_Traffic} alt="Should be a plot :)"/>
            <img src={Sussex_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Sussex;