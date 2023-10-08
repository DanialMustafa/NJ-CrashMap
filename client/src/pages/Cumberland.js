import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";

const Cumberland = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Cumberland</h1>
            <img src={ACPlot} alt="Should be a plot :)"/>
        </div>
    )
}

export default Cumberland;