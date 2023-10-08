import React from "react";
import { homeButton } from "../components/homeButton.js"
import Atlantic_Traffic from "../assets/traffic_plots/Atlantic_Traffic.png"
import Atlantic_Crash from "../assets/crash_plots/Atlantic_Crash.png"
import { SButton, SDiv, SDiv2, HeadDiv, SDiv3, SH1 } from "../components/styles.js";
import Header from "../components/Header.js";



const Atlantic = () =>{
    return(
        <SDiv>
            <HeadDiv>
                <SH1>Atlantic</SH1>
            </HeadDiv>
            
            <SDiv2>
                <img src={Atlantic_Traffic} alt="Should be a plot :)"/>
                <img src={Atlantic_Crash} alt="Should be a plot :)"/>
                <SDiv3>
                    <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
                </SDiv3>
            </SDiv2>
        </SDiv>
    )
}

export default Atlantic;