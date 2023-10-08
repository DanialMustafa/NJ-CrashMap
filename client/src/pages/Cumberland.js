import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Cumberland_Traffic from "../assets/traffic_plots/Cumberland_Traffic.png"
import Cumberland_Crash from "../assets/crash_plots/Cumberland_Crash.png"


const Cumberland = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Cumberland</h1>
            <img src={Cumberland_Traffic} alt="Should be a plot :)"/>
            <img src={Cumberland_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Cumberland;