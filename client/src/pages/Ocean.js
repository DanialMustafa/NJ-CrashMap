import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";

const Ocean = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Ocean</h1>
            <img src={ACPlot} alt="Should be a plot :)"/>
        </div>
    )
}

export default Ocean;