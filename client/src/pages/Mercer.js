import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Mercer_Traffic from "../assets/traffic_plots/Mercer_Traffic.png"
import Mercer_Crash from "../assets/crash_plots/Mercer_Crash.png"

const Mercer = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Mercer</h1>
            <img src={Mercer_Traffic} alt="Should be a plot :)"/>
            <img src={Mercer_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Mercer;