import React from "react";
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";

const Monmouth = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Monmouth</h1>
            <img src={ACPlot} alt="Should be a plot :)"/>
        </div>
    )
}

export default Monmouth;