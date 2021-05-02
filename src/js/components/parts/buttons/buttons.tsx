import * as React from "react";
import styled from "styled-components";
import { darken } from "polished";

const stdgreen = "rgb(50,205,50)";

const stdBlue = "rgb(80,100,205)";

type ButtonType = {
    func:()=>void,
    name:string
}

const StdButtonStyle = styled.button`
    border: none;
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    width: 100px;
    height: 30px;
    background:${stdgreen};
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:active{
        background:${darken(0.2,stdgreen)};
    }
`;

export const StdButton:(props:ButtonType)=>JSX.Element = ({name,func}) =>{
    return(
        <StdButtonStyle onClick={func}>{name}</StdButtonStyle>
    )
}

const SoftStyle = styled.button`
    border: none;
    color: #000;
    font-size: 12px;
    font-weight: 300;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background:${`linear-gradient(${stdBlue},${darken(0.4,stdBlue)})`};
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:active{
        background:${`linear-gradient(${darken(0.2,stdBlue)},${darken(0.4,stdBlue)})`};
    }
`;

export const SoftButton:(props:ButtonType)=>JSX.Element = ({name,func}) =>{
    return(
        <SoftStyle onClick={func}>{name}</SoftStyle>
    )
}