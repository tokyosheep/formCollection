import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { darken, rgb, rgba } from "polished";
import { centerPlaced , shineStyle } from "../../../styles/mixin";

export type RadioSelectorType = {
    options:string[],
    checkedIndex:number,
    func:(e:React.ChangeEvent<HTMLInputElement>|React.MouseEvent<HTMLDivElement, MouseEvent>,i:number)=>void
};

const SelectorWrapper = styled.div`
    width: 90%;
    height: 200px;
    overflow:scroll;
    background: rgb(50,50,50,);
    border: 1px solid #000;
`;

const OptionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const Option = styled.label<{checked:boolean}>`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #000;
    display: block;
    background:${props=>props.checked ? "rgb(120,120,120)" : "rgb(80,80,80)"};
    cursor: pointer;
    position: relative;
    transition: .3s linear;
    & > input{
        display: none;
    }
`;

const OptionTitle = styled.span`
    margin: 0;
    color: #fff;
    font-size: 12px;
    font-weight: 200;
    ${centerPlaced};
`;

export const RadioSelector:(props:RadioSelectorType)=>JSX.Element = ({func,options,checkedIndex}) =>{
    const optionList = options.map((m,i)=>{
        return(
            <Option key={i} checked={i===checkedIndex}>
                <input type="radio" onChange={(e)=>func(e,i)} checked={i===checkedIndex}/>
                <OptionTitle>{m}</OptionTitle>
            </Option>
        )
    })
    return(
        <SelectorWrapper>
            <OptionList>
                {optionList}
            </OptionList>
        </SelectorWrapper>
    )
}

const PopSelectorWrraper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 20;
`;

const PopSelectorButton = styled.div`
    width: 70%;
    height: 30px;
    color: #fff;
    background: #2e65a3;
    font-size: 15px;
    font-weight: 300;
    cursor: pointer;
    position: relative;
    & > span{
        display: block;
        ${centerPlaced};
    }

    &:active{
        background:${darken(0.2,"#2e65a3")};
    }
`;

const PopSelectList = styled.ul<{visible:boolean}>`
    width: 70%;
    height: auto;
    background: rgba(250,250,250,0.9);
    list-style:none;
    padding: 0;
    cursor: pointer;
    transform:translateY(2%);
    transition: .3s linear;
    opacity: ${props=> props.visible ? "1" : "0"};
    pointer-events:${props=> props.visible ? "auto" : "none"};
`;

const PopOptionWrapper = styled.label`
    
`;

const PopselectListOption = styled.div<{checked:boolean}>`
    width: 100%;
    height: 30px;
    margin: 0;
    border-bottom: 1px solid #000;
    position: relative;
    cursor: pointer;
    & > input{
        display: none;
    }
    & > span{
        color: #000;
        display: block;
        font-size: 12px;
        font-weight: 300;
        position: absolute;
        margin: 0;
        top: 50%;
        left: 20px;
        transform:translateY(-50%);
    }
    &:hover{
        background:rgba(250,250,250,0.3);
    }
`;

export const PopSelector:(props:RadioSelectorType)=>JSX.Element = ({func,options,checkedIndex}) =>{
    const [visible,setVisible] = useState<boolean>(false);
    const optionList = options.map((m,i)=>{
        return(
            <li>
                <PopOptionWrapper >
                    <PopselectListOption checked={i===checkedIndex} >
                        <input type="radio" 
                        onChange={(e)=>{
                            func(e,i);
                            setVisible(false); 
                        }} checked={i===checkedIndex}/>
                        <span>{m}</span>
                    </PopselectListOption>
                </PopOptionWrapper>
            </li>
        )
    });
    return(
        <PopSelectorWrraper>
            <PopSelectorButton onClick={()=>setVisible(!visible)}>
                <span>{options[checkedIndex]}</span>
            </PopSelectorButton>
            <PopSelectList visible={visible}>
                {optionList}
            </PopSelectList>
        </PopSelectorWrraper>
    )
}

const RadioSelectotListWrapper = styled.div`
    position: relative;
    background: rgb(50,50,50);
    box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.2);
    border-radius: 5px;
    width: 90%;
    height: 90%;
    display: flex;
    justify-content:space-around;
    align-items:center;
`;

const RadioSelectorList = styled.ul`
    list-style:none;
    padding: 0;
    margin: 0;
    width: 50%;
    height: 200px;
    overflow:scroll;
    background: rgb(30,30,30);
    box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.2);
    cursor: pointer;
`;

const RadioSelectorOption = styled.div<{checked:boolean}>`
    position: relative;
    border-bottom: 1px solid #555;
    width: 100%;
    height: 30px;
    cursor: pointer;
    background: ${props=>props.checked ? rgb(60,60,60) : rgb(20,20,20)};
    transition: .3s linear;
    & > span{
        ${centerPlaced};
        color: #fff;
        font-size: 15px;
        font-weight: 300;
    }

    & > input{
        display: none;
    }
    
`;

const RadioSelectorButonRange = styled.div`
    width: 40%;
    height: 180px;
    background: rgb(60,60,60);
    border-radius: 5px;
    box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.2);
    display: flex;
    justify-content:space-around;
    flex-wrap:wrap;
    position: relative;
`;

interface CircleShape {size?:number,color:string};

const Circle = styled.div.attrs<CircleShape>(props=>({
    size: props.size || 20,
    color: props.color,
}))<{size:number,color:string}>`
    width: ${props=> props.size}px;
    height: ${props=> props.size}px;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    background: linear-gradient(rgb(30,30,30),rgb(50,50,50));
    margin: auto;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.2) inset;
    &:active{
        background:linear-gradient(${darken(0.2,"rgb(30,30,30)")},${darken(0.2,"rgb(50,50,50)")});
    }
`;

const ArrowButton = styled.div<{size:number,x:number,y:number,add:string,color:string}>`
    ${centerPlaced}
    width: ${props=>props.size}px;
    height: ${props=>props.size}px;
    border-top: 3px solid ${props=>props.color};
    border-right: 3px solid ${props=>props.color};
    cursor: pointer;
    transition: .3s linear;
    pointer-events:none;
`;

const TitleWrapper = styled.div`
    margin: 10px 0;
    width: 90%;
    height: 40px;
    background: linear-gradient(#000,#333);
    border-radius: 7px;
    position: relative;
    & > h3{
        font-size: 20px;
        font-weight: 300;
        margin: 0;
        color: #fff;
        ${centerPlaced};
    }
`;

const themeColor = "rgb(100,100,100)";

export const RadioSelectorListBox:(props:RadioSelectorType)=>JSX.Element = ({func,options,checkedIndex}) =>{
    const optionList = options.map((op,i)=>{
        return(
            <li key={i}>
                <label>
                    <RadioSelectorOption checked={checkedIndex===i}>
                        <input type="radio" onChange={(e)=>func(e,i)} checked={checkedIndex===i} />
                        <span>{op}</span>
                    </RadioSelectorOption>
                </label>
            </li>
        )
    });
    return(
        <RadioSelectotListWrapper>
            <RadioSelectorButonRange>
                <TitleWrapper>
                    <h3>{options[checkedIndex]}</h3>
                </TitleWrapper>
                <Circle color={themeColor} size={50} onClick={(e)=>func(e,checkedIndex-1)}>
                    <ArrowButton color={themeColor} x={-50} y={-30} size={20} add={"rotate(315deg)"} ></ArrowButton>
                </Circle>
                <Circle color={themeColor} size={50} onClick={(e)=>func(e,checkedIndex+1)}>
                    <ArrowButton color={themeColor} x={-50} y={-60} size={20} add={"rotate(135deg)"} ></ArrowButton>
                </Circle>
            </RadioSelectorButonRange>
            <RadioSelectorList>
                {optionList}
            </RadioSelectorList>
        </RadioSelectotListWrapper>
    )
}