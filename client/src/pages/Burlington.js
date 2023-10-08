import React from "react";
import { SButton } from "../components/styles.js";

const Burlington = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Burlington</h1>
        </div>
    )
}

export default Burlington;