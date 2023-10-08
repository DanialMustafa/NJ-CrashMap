import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Salem_Traffic from "../assets/traffic_plots/Salem_Traffic.png"
import Salem_Crash from "../assets/crash_plots/Salem_Crash.png"

const Salem = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Salem</h1>
            <img src={Salem_Traffic} alt="Should be a plot :)"/>
            <img src={Salem_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Salem;