import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { darken, rgba } from "polished";
import { centerPlaced , shineStyle , shineTitle } from "../../../styles/mixin";

const setGradient:(color:string,dk1:number,dk2:number)=>string = (color,dk1,dk2) => `linear-gradient(${darken(dk1,color)},${darken(dk2,color)})`;

const MenuButtonWrapper = styled.label<{color:string,checked:boolean}>`
    display: block;
    width: 100%;
    height: 30px;
    background: ${props=>props.checked ? setGradient(props.color,0.2,0.4) : setGradient(props.color,0,0.2)};
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    font-weight: 200;
    position: relative;
    border: 1px solid ${props=> darken(0.6,props.color)};
    transition: .3s linear;
    &:active{
        background:${props=>darken(0.2,props.color)};
    }
    & > input{
        display:none;
    }
    & > p{
        margin: 0;
        margin-left: 5px;
        position: absolute;
        left: 20px;
        top: 50%;
        transform:translateY(-50%);
    }
`;

type MenuButtonProps = {
    checked:boolean,
    color:string,
    func:(e:React.ChangeEvent<HTMLInputElement>,name:string)=>void,
    name:string
}

export const MenuButton:(props:MenuButtonProps)=>JSX.Element = props =>{
    return(
        <MenuButtonWrapper checked={props.checked} color={props.color}>
            <input type="radio" checked={props.checked} onChange={(e)=>props.func(e,props.name)} />
            <p>{props.name}</p>
        </MenuButtonWrapper>
    )
}



export type StdRadioType<T> = {
    checked:boolean,
    arg?:T,
    func:(e:React.ChangeEvent<HTMLInputElement>,arg?:T)=>void
};

const StdRadioWrapper = styled.label<{checked:boolean}>`
    height: 30px;
    width: 300px;
    display:flex;
    justify-content:space-around;
    padding: 5px;
    box-sizing:border-box;
    border: 1px solid #aaa;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    transition: .3s linear;
    background:${props=>props.checked ? "rgba(100,100,100,0.4)" : "rgba(100,100,100,0)"};
`;

const RadioInput = styled.input`
    display: none;
`;

const StdRadioTitle = styled.span`
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    margin: 0;
`;


const StdRadioDisplay = styled.div<{checked:boolean}>`
    position: relative;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #aaa;
    margin-left: 5px;
    & > div{
        ${centerPlaced};
        width: ${props=>props.checked ? "10px" : "0px"};
        height: ${props=>props.checked ? "10px" : "0px"};
        border-radius: 50%;
        background:rgb(0,100,255);
        transition: .3s linear;
    }
`;

export const StdRadioButton:(props:StdRadioType<number>)=>JSX.Element = ({checked,func,arg}) =>{
    return(
        <StdRadioWrapper checked={checked}>
            <StdRadioTitle>std radio buttons</StdRadioTitle>
            <RadioInput type="radio" checked={checked} onChange={(e)=>func(e,arg)}></RadioInput>
            <StdRadioDisplay checked={checked}>
                <div></div>
            </StdRadioDisplay>
        </StdRadioWrapper>
    )
}

const SimpleRadioWrraper = styled.label`
    width: 200px;
    height: 40px;
    display: flex;
    justify-content:space-between;
    cursor: pointer;
    position: relative;
    background:rgba(200,200,200,0.1);
    & > input{
        display: none;
    }
    &:hover{
        background:rgba(200,200,200,0.2);
    }
`;

const SimpleRadioDisplay = styled.div<{checked:boolean}>`
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background: rgb(40,40,40);
    box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.5) inset;
    border: 1px solid #000;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    & > div{
        ${centerPlaced};
        width: ${props=> props.checked ? "70%" : "0%"};
        height: ${props=> props.checked ? "70%" : "0%"};
        background: rgb(50,200,50);
        border-radius: 3px;
        transition: .3s linear;
    }
`;

const SimpleRadioTitle = styled.span`
    color: #fff;
    font-size: 13px;
    font-weight: 300;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
`;

export const SimpleRadioBox:(props:StdRadioType<number>)=>JSX.Element = ({checked,func,arg}) =>{
    return(
        <SimpleRadioWrraper>
            <SimpleRadioTitle>simple radiobox</SimpleRadioTitle>
            <input type="radio" checked={checked} onChange={(e)=>func(e,arg)}/>
            <SimpleRadioDisplay checked={checked}>
                <div></div>
            </SimpleRadioDisplay>
        </SimpleRadioWrraper>
    )
}


const BlockRadioWrapper = styled.label`
    display: block;
    width: 60%;
    height: 40px;
    position: relative;
    border-radius: 5px;
    background: rgb(20,20,20);
    box-shadow: 0px 0px 4px 4px rgba(0,0,0,0.2) inset;
    overflow:hidden;
    z-index: 1;
    cursor: pointer;
    & > input{
        display: none;
    }
`;

const BoxTitle = styled.span`
    display: block;
    position: absolute;
    z-index: 2;
    font-size: 16px;
    font-weight: 300;
    color: #444;
    ${centerPlaced};
`;

const boxColor = "rgb(40,200,100)";

const BlockBar = styled.div<{checked:boolean}>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: ${props=>props.checked ? "0%" : "100%"};
    background: linear-gradient(${boxColor},${darken(0.2,boxColor)});
    box-shadow: 0px 0px 4px 4px rgba(0,0,0,0.1) inset;
    z-index: 3;
    transition: .3s linear;
    & > span{
        display: block;
        position: absolute;
        z-index: 4;
        color: #fff;
        font-size: 15px;
        font-weight: 300;
        ${centerPlaced};
    }
`;


export const BlockRadioBox:(props:StdRadioType<number>)=>JSX.Element = ({checked,func,arg}) =>{
    return(
        <BlockRadioWrapper>
            <BoxTitle>OFF</BoxTitle>
            <input type="radio" checked={checked} onChange={(e)=>func(e,arg)}/>
            <BlockBar checked={checked}>
                <span>ON</span>
            </BlockBar>
        </BlockRadioWrapper>
    )
}

const shineColor = "rgb(80,150,250)";

const onColor = "rgb(200,100,100)";

const ShineRadioWrraper = styled.label<{color:string,checked:boolean}>`
    display: block;
    position: relative;
    border: 1px solid #000;
    background: rgb(30,30,30);
    width: 60%;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    ${shineStyle};
    & > input{
        display: none;
    }
`;

const ShineRadioTitle = styled.span<{color:string,checked:boolean}>`
    font-size: 15px;
    font-weight: 200;
    ${shineTitle};
    ${centerPlaced};
`;

const ShineRadioDisplay = styled.div<{color:string,checked:boolean}>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props=> props.checked ? onColor : darken(0.5,shineColor)};
    box-shadow:0px 0px 2px 2px ${props=>props.checked ? onColor : darken(0.5,shineColor)};
    position: absolute;
    top: 50%;
    right: 20px;
    transform:translateY(-50%);
    transition: .3s linear;
`;

export const ShineRadioBox:(props:StdRadioType<number>)=>JSX.Element = ({checked,func,arg})=>{
    return(
        <ShineRadioWrraper color={shineColor} checked={checked}>
            <ShineRadioTitle color={shineColor} checked={checked}>shine radio</ShineRadioTitle>
            <input type="radio" checked={checked} onChange={(e)=>func(e,arg)}/>
            <ShineRadioDisplay color={shineColor} checked={checked}></ShineRadioDisplay>
        </ShineRadioWrraper>
    )
}