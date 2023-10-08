import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";
import Camden_Traffic from "../assets/traffic_plots/Burlington_Traffic.png"
import Camden_Crash from "../assets/crash_plots/Camden_Crash.png"



const Camden = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Camden</h1>
            <img src={Camden_Traffic} alt="Should be a plot :)"/>
            <img src={Camden_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Camden;