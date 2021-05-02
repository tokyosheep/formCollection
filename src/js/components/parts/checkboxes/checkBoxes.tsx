import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import { centerPlaced , shineStyle , shineTitle } from "../../../styles/mixin";

import { darken } from "polished";

const PSColor = "rgb(40,40,200)";
const AIColor = "rgb(200,200,30)";

const CheckBoxWrapper = styled.label`
    display: flex;
    justify-content:space-between;
    width: 230px;
    height: 30px;
    cursor: pointer;
`;

const CheckBoxTitle = styled.h3`
    color: #fff;
    font-size: 13px;
    font-weight: 300;
`;

const CheckBoxStatus = styled.p`
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    padding: 0;
    margin: 0;
    ${centerPlaced};
`;

const CheckBoxInput = styled.input`
    display: none;
`;

const CheckBoxDisplay = styled.div<{checked:boolean}>`
    width: 100px;
    height: 100%;
    border-radius: 10px;
    background:${props=>props.checked ? darken(0.2,PSColor) : darken(0.2,AIColor)};
    box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.2) inset;
    position:relative;
    transition: .3s linear;
`;

const CheckBoxBall = styled.div<{checked:boolean}>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: ${props=>props.checked ? "0px" : "70px"};
    background:linear-gradient(rgb(200,200,200),rgb(220,220,220),rgb(180,180,180));
    transition: .4s linear;
`;

export const SwitchCheckBox = () =>{
    const [check,setCheck] = useState<boolean>(false);
    return(
        <CheckBoxWrapper>
            <CheckBoxTitle>switch box</CheckBoxTitle>
            <CheckBoxInput onChange={(e)=>setCheck(e.target.checked)} checked={check} type="checkbox"></CheckBoxInput>
            <CheckBoxDisplay checked={check}>
                <CheckBoxStatus>{check ? "ON" : "OFF"}</CheckBoxStatus>
                <CheckBoxBall checked={check}></CheckBoxBall>
            </CheckBoxDisplay>
        </CheckBoxWrapper>
    )
};

const PlateBoxWrapper = styled.label<{checked:boolean}>`
    display:block;
    width: 200px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 5px;
    background: ${props=> props.checked ? "rgba(80,80,80,0.4)" : "rgba(10,10,10,0.2)" };
    position: relative;
    cursor: pointer;
    transition: .3s linear;
    & > input{
        display: none;
    }
`;

const PlateBoxTitle = styled.p`
    font-size: 15px;
    font-weight: 300;
    margin: 0;
    color: #fff;
    position: absolute;
    left: 20px;
    top: 50%;
    transform:translateY(-50%);
`;

export const PlateCheckBox = () =>{
    const [check,setCheck] = useState<boolean>(false);
    return(
        <PlateBoxWrapper checked={check}>
            <input type="checkbox" checked={check} onChange={(e)=>setCheck(e.target.checked)}/>
            <PlateBoxTitle>plate checkbox</PlateBoxTitle>
        </PlateBoxWrapper>
    )
}


const BlockSwitchWrapper = styled.label`
    width: 300px;
    height: 30px;
    display: flex;
    justify-content:flex-start;
    position: relative;
    background:rgb(0,0,0);
    cursor: pointer;
    & > input{
        display: none;
    }
`;

const OneBlock = styled.div<{color:string,click:boolean}>`
    width: 50%;
    height: 100%;
    background:${props=> props.click ? darken(0.2,props.color) : props.color };
    box-shadow: ${props=> props.click ?  "none" : `0px 5px 0px ${darken(0.4,props.color)}`};
    margin-top: ${props=> props.click ? "5px" : "0"};
    position: relative;
    & > span {
        ${centerPlaced};
        color:${props=>props.click ? "#aaa"  :  "#fff" };
        font-size: 15px;
        font-weight: 400;
        margin: 0;
    }
`;

const blockColor = "rgb(100,100,100)";

export const BlockSwitch = () =>{
    const [check,setCheck] = useState<boolean>(false);
    return(
        <BlockSwitchWrapper>
            <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)}/>
            <OneBlock color={blockColor} click={check}><span>ON</span></OneBlock>
            <OneBlock color={blockColor} click={!check}><span>OFF</span></OneBlock>
        </BlockSwitchWrapper>
    )
}

const BlurButtonWrapper = styled.label<{color:string,checked:boolean}>`
    width: 300px;
    height: 30px;
    display: block;
    position: relative;
    ${shineStyle};
    border-radius: 5px;
    cursor: pointer;
    & > input{
        display:none;
    }
`;

const BlurTitle = styled.span<{color:string,checked:boolean}>`
    font-size: 20px;
    font-weight: 300;
    ${shineTitle};
    ${centerPlaced};
`;

const BlurColor = "#559ae0";

export const BlurCheckButton = () =>{
    const [check,setCheck] = useState<boolean>(false);
    return(
        <BlurButtonWrapper color={BlurColor} checked={check}>
            <input type="checkbox" checked={check} onChange={(e)=>setCheck(e.target.checked)}/>
            <BlurTitle checked={check} color={BlurColor}>blur button</BlurTitle>
        </BlurButtonWrapper>
    )
}