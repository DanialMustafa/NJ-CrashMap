import React from "react";
import { homeButton } from "../components/homeButton.js"
import ACPlot from "../assets/my_plot.png"
import { SButton } from "../components/styles.js";



const Atlantic = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Atlantic</h1>
            <img src={ACPlot} alt="Should be a plot :)"/>
        </div>
    )
}

export default Atlantic;