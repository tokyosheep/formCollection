import * as React from "react";
import styled from "styled-components";

import FormBox from "../commonParts/formBox";

import { SwitchCheckBox , PlateCheckBox , BlockSwitch , BlurCheckButton } from "../../parts/checkboxes/checkBoxes";
import { ElmList } from "../commonParts/elmList";

const CheckBoxList = () =>{
    const checks = [SwitchCheckBox,PlateCheckBox,BlockSwitch,BlurCheckButton].map((Elm,i)=><FormBox key={i} Elm={<Elm></Elm>}></FormBox>)
    return(
        <ElmList>
            {checks}
        </ElmList>
    )
}

export default CheckBoxList;