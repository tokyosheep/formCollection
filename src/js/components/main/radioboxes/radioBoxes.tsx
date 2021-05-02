import * as React from "react";
import { useState , useCallback } from "react";
import styled from "styled-components";

import { ElmList , ElmCell } from "../commonParts/elmList";
import { StdRadioButton  , StdRadioType , SimpleRadioBox , BlockRadioBox , ShineRadioBox} from "../../parts/radioboxes/radioButtons";

export const RadioList = styled.ul`
    list-style:none;
    padding: 0;
    margin: 0;
    position: relative;
    & > li{
        margin-bottom: 5px;
        width: 80%;
    }
`;

const RadioWrapper:(props:{Elm:(props:StdRadioType<number>) => JSX.Element})=>JSX.Element = ({Elm}) =>{
    const [checks,setChecks] = useState<boolean[]>([true,false,false,false]);
    const handleRadioBox = useCallback((e,index)=>{
        const newCheckes = [false,false,false,false];
        newCheckes[index] = true;
        setChecks(newCheckes);
    },[checks]);
    const radios = checks.map((check,index)=><li key={index}><Elm func={handleRadioBox} checked={check} arg={index}></Elm></li>);
    return(
        <RadioList>
            {radios}
        </RadioList>
    )
}



const RadioButtonList = () =>{
    const radios = [StdRadioButton,SimpleRadioBox,BlockRadioBox,ShineRadioBox].map((Elm,index)=><ElmCell key={index}><RadioWrapper Elm={Elm}/></ElmCell>);
    return(
        <ElmList>
            {radios}
        </ElmList>
    )
}

export default RadioButtonList;

