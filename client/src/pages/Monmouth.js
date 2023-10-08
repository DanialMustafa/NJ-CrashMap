import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Monmouth_Traffic from "../assets/traffic_plots/Monmouth_Traffic.png"
import Monmouth_Crash from "../assets/crash_plots/Monmouth_Crash.png"

const Monmouth = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Monmouth</h1>
            <img src={Monmouth_Traffic} alt="Should be a plot :)"/>
            <img src={Monmouth_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Monmouth;