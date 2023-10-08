import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Passaic_Traffic from "../assets/traffic_plots/Passaic_Traffic.png"
import Passaic_Crash from "../assets/crash_plots/Passaic_Crash.png"


const Pasiac = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Passaic</h1>
            <img src={Passaic_Traffic} alt="Should be a plot :)"/>
            <img src={Passaic_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Pasiac;