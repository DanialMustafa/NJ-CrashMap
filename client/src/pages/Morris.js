import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Morris_Traffic from "../assets/traffic_plots/Morris_Traffic.png"
import Morris_Crash from "../assets/crash_plots/Morris_Crash.png"

const Morris = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Morris</h1>
            <img src={Morris_Traffic} alt="Should be a plot :)"/>
            <img src={Morris_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Morris;