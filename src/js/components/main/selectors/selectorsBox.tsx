import * as React from "react";
import { useState , useCallback } from "react";
import styled from "styled-components";

import { SizeMenuSelector , SelectorType } from "../../parts/selectors/selector";
import { ElmList , ElmCell } from "../commonParts/elmList";

const selectorValues = ["apple","banana","strawberry","pear","kiwi"];

const SelectorBox:(props:{Elm:(props:SelectorType<string>) =>JSX.Element,index:number})=>JSX.Element = ({Elm,index}) =>{
    const [selected,setSelected] = useState<string>("apple");
    const handleSelector = useCallback((e)=>setSelected(e.target.value),[selected]);
    return(
        <Elm options={selectorValues} func={handleSelector} value={selected}></Elm>
    )
}

const SelectorList = () =>{
    const selectorList = [SizeMenuSelector].map((Elm,index)=>{
        return(<ElmCell key={index}><SelectorBox Elm={Elm} index={index}></SelectorBox></ElmCell>);
    });
    return(
        <ElmList>
            {selectorList}
        </ElmList>
    )
}

export default SelectorList;