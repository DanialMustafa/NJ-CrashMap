import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Somerset_Traffic from "../assets/traffic_plots/Somerset_Traffic.png"
import Somerset_Crash from "../assets/crash_plots/Somerset_Crash.png"

const Somerset = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Somerset</h1>
            <img src={Somerset_Traffic} alt="Should be a plot :)"/>
            <img src={Somerset_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Somerset;