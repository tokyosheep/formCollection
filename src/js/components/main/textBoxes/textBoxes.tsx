import * as React from "react";
import styled from "styled-components";

import { StdTextBox , TransTextBox , PlateText } from "../../parts/textBoxes/textForms";
import { PopTextBox } from "../../parts/textBoxes/popText";

import FormBox from "../commonParts/formBox";
import { ElmList } from "../commonParts/elmList";

const TextBoxList = () =>{
    const checks = [StdTextBox,TransTextBox,PlateText,PopTextBox].map((Elm,i)=><FormBox key={i} Elm={<Elm></Elm>}></FormBox>)
    return(
        <ElmList>
            {checks}
        </ElmList>
    )
}

export default TextBoxList;