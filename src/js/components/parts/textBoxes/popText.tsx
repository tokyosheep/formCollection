import * as React from "react";
import { useState , useCallback } from "react";
import styled from "styled-components";

const PopTextWrraper = styled.label`
    width: 400px;
    height: 30px;
    display: block;
`;

const PopTextInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background: rgba(200,200,200,0.1);
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    position:relative;
    &:focus{
        outline: none;
    }
    & + div{
        width: 100%;
        height: 100%;
        box-sizing:border-box;
        border-bottom: 1px solid rgb(100,200,200);
        transform:scaleX(0);
        transition: .3s linear;
        position: absolute;
        top: 0;
        left: 0;
    }
    &:focus + div{
        transform:scaleX(1);
    }
`;

export const PopTextBox = () =>{
    const [ textValue , setTextValue ] = useState<string>("");
    return(
        <PopTextWrraper>
            <PopTextInput type="text" value={textValue} onChange={(e)=>setTextValue(e.target.value)}></PopTextInput>
            <div></div>
        </PopTextWrraper>
    )
}

