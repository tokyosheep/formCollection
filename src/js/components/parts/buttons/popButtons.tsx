import * as React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { centerPlaced } from "../../../styles/mixin";

const InitTitle = styled.span`
    color: #fff;
    font-size: 30px;
    transition: .2s linear;
    opacity: 1;
    ${centerPlaced};
`;

const MainTitle = styled.span`
    color: #fff;
    font-size: 20px;
    opacity: 0;
    transition: .2s linear;
    ${centerPlaced};
`;

const PopButtonStyle = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    background: rgb(250,50,150);
    border-radius: 50%;
    transition: .3s linear;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    position: relative;
    &:hover{
        width: 300px;
        border-radius: 30px;
        ${InitTitle}{
            opacity: 0;
        }   
        ${MainTitle}{
            opacity: 1;
        }
    }
    &:active{
        background: ${darken(0.4,"rgb(250,50,150)")};
    }
`;

const pushButton = () => alert("pushed");

export const PopButton = () =>{
    
    return(
        <PopButtonStyle >
            <InitTitle>P</InitTitle>
            <MainTitle>push</MainTitle>
        </PopButtonStyle>
    )
}

const LeapingButtonStyle = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 20px;
    background: rgb(20,200,120);
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    transition: .3s linear;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
    &:active{
        transform: scale(0.6);
        background: ${darken(0.3,"rgb(20,200,120)")};
    }
`;

export const LeapingButton = () =>{
    return(
        <div>
            <LeapingButtonStyle >push</LeapingButtonStyle>
        </div>
    )
}