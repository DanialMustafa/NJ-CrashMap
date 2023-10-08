import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Middlesex_Traffic from "../assets/traffic_plots/Middlesex_Traffic.png"
import Middlesex_Crash from "../assets/crash_plots/Middlesex_Crash.png"

const Middlesex = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Middlesex</h1>
            <img src={Middlesex_Traffic} alt="Should be a plot :)"/>
            <img src={Middlesex_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Middlesex;