import * as React from "react";
import { useState , useCallback } from "react";
import styled from "styled-components";
import { centerPlaced } from "../../../styles/mixin";

const StdTextWrapper = styled.label`
    width: 400px;
    height: 40px;
    padding: 5px;
    box-sizing:border-box;
    background: rgba(100,100,100,0.3);
    border: 1px solid #999;
    display: flex;
    justify-content:space-between;
`;

const StdTextBoxStyle = styled.input`
    width: 200px;
    height: 90%;
    border-bottom: 1px solid #eee;
    border: none;
    font-size: 12px;
    color: #fff;
    background:rgba(20,20,20,0.8);
    &:focus{
        outline: none;
    }
`;

const TextTiele = styled.span`
    font-size: 20px;
    font-weight: 300;
    color: #fff;
`;

export const StdTextBox = () =>{
    const [ textValue , setTextValue ] = useState<string>("");
    return(
        <StdTextWrapper>
            <TextTiele>text box</TextTiele>
            <StdTextBoxStyle onChange={(e)=>setTextValue(e.target.value)} value={textValue} type="text" ></StdTextBoxStyle>
        </StdTextWrapper>
    )
}

const TransTextBoxWrraper = styled.label`
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content:space-between;
    width: 300px;
    height: 30px;
    cursor: pointer;
`;

const TransTextTitle = styled.span`
    color: #fff;
    font-size: 15px;
    font-weight: 300;
    margin: 0;
    margin-top: 3px;
`;

const TransTextInput = styled.input`
    border: none;
    background: rgba(0,0,0,0);
    color: #fff;
    font-size: 12px;
    width: 200px;
    background:rgba(20,20,20,0.3);
    &:focus{
        outline: none;
    }
`;

export const TransTextBox = () =>{
    const [ textValue , setTextValue ] = useState<string>("");
    return(
        <TransTextBoxWrraper>
            <TransTextTitle>trans box</TransTextTitle>
            <TransTextInput type="text" value={textValue} onChange={(e)=>setTextValue(e.target.value)}></TransTextInput>
        </TransTextBoxWrraper>
    )
}

const PlateTextWrapper = styled.label`
    width: 400px;
    height: 30px;
    border: solid 1px #aaa;
    background: rgb(40,40,40);
    display: flex;
    justify-content:space-between;
    border-radius: 5px;
    overflow:hidden;
`;

const Plate = styled.div`
    position: relative;
    background: linear-gradient(#f0bd5d,#b89045);
    width: 35%;
    height: 100%;
    & > span{
        color: #000;
        font-weight: 400;
        font-size: 15px;
        display: block;
        ${centerPlaced};
    }
`;

const PlateInput = styled.input`
    width: 65%;
    height: 100%;
    border: none;
    background: linear-gradient(rgb(120,120,120),rgb(80,80,80));
    color: #fff;
    font-size: 15px;
    &:focus{
        outline: none;
        background: linear-gradient(rgb(160,160,160),rgb(120,120,120));
    }
    transition: .3s linear;
`;

export const PlateText = () =>{
    const [ textValue , setTextValue ] = useState<string>("");
    return(
        <PlateTextWrapper>
            <Plate><span>Plate Text</span></Plate>
            <PlateInput type="text" value={textValue} onChange={(e)=>setTextValue(e.target.value)}></PlateInput>
        </PlateTextWrapper>
    )
}

