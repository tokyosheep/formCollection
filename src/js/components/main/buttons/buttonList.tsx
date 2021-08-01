import * as React from "react";
import styled from "styled-components";

import FormBox from "../commonParts/formBox";

import { AsyncButton } from "../../parts/buttons/asyncButton";
import { SoftButton , StdButton } from "../../parts/buttons/buttons";
import { PopButton , LeapingButton } from "../../parts/buttons/popButtons";
import { ElmList } from "../commonParts/elmList";

const ButtonsList = () =>{
    const pushButton = () => alert("push");
    const btnList = [SoftButton,StdButton,PopButton,LeapingButton,AsyncButton].map((Btn,i)=><FormBox key={i} Elm={<Btn name="button" func={pushButton} />}></FormBox>);
    return(
        <ElmList>
            {btnList}
        </ElmList>
    )
}

export default ButtonsList;