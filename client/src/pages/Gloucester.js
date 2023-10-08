import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Gloucester_Traffic from "../assets/traffic_plots/Gloucester_Traffic.png"
import Gloucester_Crash from "../assets/crash_plots/Gloucester_Crash.png"


const Gloucester = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Gloucester</h1>
            <img src={Gloucester_Traffic} alt="Should be a plot :)"/>
            <img src={Gloucester_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Gloucester;