import React from "react";
import { HeadDiv, SButton } from "./styles";

const Header = () => {
    return (
        <HeadDiv>
            <SButton onClick={() => {window.location.href = "/"}}>HOME</SButton>
        </HeadDiv>
    )
}

export default Header;