import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Hunterdon_Traffic from "../assets/traffic_plots/Hunterdon_Traffic.png"
import Hunterdon_Crash from "../assets/crash_plots/Hunterdon_Crash.png"

const Hunterdon = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Hunterdon</h1>
            <img src={Hunterdon_Traffic} alt="Should be a plot :)"/>
            <img src={Hunterdon_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Hunterdon;