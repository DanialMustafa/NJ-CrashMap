import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Union_Traffic from "../assets/traffic_plots/Union_Traffic.png"
import Union_Crash from "../assets/crash_plots/Union_Crash.png"

const Union = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Union</h1>
            <img src={Union_Traffic} alt="Should be a plot :)"/>
            <img src={Union_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Union;