import styled from 'styled-components';


export const SButton = styled.button`
    padding: 10px;
    margin: 10px;
    width: 30%;
    border-radius: 10px;
    border: 2px solid black;
    transition: 0.3s;
    &:hover{
        background-color: #dbdbdb;
    }
`
export const SH1 = styled.h1`
    color: white;
`

export const SDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

export const SDiv2 = styled.div`
    height: 100%;
    width: 100%;
    top: 15%;
    position:absolute;
`

export const SDiv3 = styled.div`
    top: 80%;
    left: 40%;
    position:absolute;
    width: 60%;
`

export const HeadDiv = styled.nav`
    /* Dimensions and color */
    width: 100%;
    height: 80px;
    top: 0;
    max-height: 10%;
    background-color: #1F77B4;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

    position: fixed;
    z-index: 1;

    /* Aligns the text/items in middle of footer */
    display: flex;
    align-items: center;
    justify-content: center;
`;

