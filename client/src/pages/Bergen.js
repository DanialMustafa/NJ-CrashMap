import React from "react";
import { SButton } from "../components/styles.js";
import Bergen_Traffic from "../assets/traffic_plots/Bergen_Traffic.png"
import Bergen_Crash from "../assets/crash_plots/Bergen_Crash.png"

const Bergen = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Bergen</h1>
            <img src={Bergen_Traffic} alt="Should be a plot :)"/>
            <img src={Bergen_Crash} alt="Should be a plot :)"/>
        </div>
    )
}

export default Bergen;