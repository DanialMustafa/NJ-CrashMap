import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Cape_May_Traffic from "../assets/traffic_plots/Cape_May_Traffic.png"
import Cape_May_Crash from "../assets/crash_plots/Cape_May_Crash.png"


const CapeMay = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Cape May</h1>
            <img src={Cape_May_Traffic} alt="Should be a plot :)"/>
            <img src={Cape_May_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default CapeMay;