import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Ocean_Traffic from "../assets/traffic_plots/Ocean_Traffic.png"
import Ocean_Crash from "../assets/crash_plots/Ocean_Crash.png"

const Ocean = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Ocean</h1>
            <img src={Ocean_Traffic} alt="Should be a plot :)"/>
            <img src={Ocean_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Ocean;