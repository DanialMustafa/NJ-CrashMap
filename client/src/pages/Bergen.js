import React from "react";
import { SButton } from "../components/styles.js";


const Bergen = () =>{
    return(
        <div>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
            <h1>Bergen</h1>
        </div>
    )
}

export default Bergen;