import * as React from "react";
import { useState , useCallback } from "react";
import styled from "styled-components";

import { ElmList , ElmCell } from "../commonParts/elmList";
import { RadioList } from "../radioboxes/radioBoxes";
import { PopSelector , RadioSelector , RadioSelectorType , RadioSelectorListBox } from "../../parts/radioSelectors/radioSelector";

const options = ["Yokohama","Osaka","Tokyo","Fukuoka","Nagoya","Sapporo","Kagoshima","Sendai","Aomori"];
const flagLength:boolean[] = new Array(options.length-1).fill(false);

const RadioWrapper:(props:{Elm:(props:RadioSelectorType) => JSX.Element})=>JSX.Element = ({Elm}) =>{
    const [checks,setChecks] = useState<boolean[]>([true,...flagLength]);
    const handleRadioBox = useCallback((e,index)=>{
        const newCheckes = [...flagLength,false];
        if(index > newCheckes.length-1)index = newCheckes.length-1;
        if(index < 0)index = 0;
        newCheckes[index] = true;
        setChecks(newCheckes);
    },[checks]);
    return(
        <RadioList>
            <Elm func={handleRadioBox} checkedIndex={checks.findIndex(i=>i===true)} options={options}></Elm>
        </RadioList>
    )
}

const RadioSelectorList = () =>{
    const radios = [RadioSelector,PopSelector,RadioSelectorListBox].map((Elm,index)=><ElmCell key={index}><RadioWrapper Elm={Elm}/></ElmCell>);
    return(
        <ElmList>
            {radios}
        </ElmList>
    )
}

export default RadioSelectorList;