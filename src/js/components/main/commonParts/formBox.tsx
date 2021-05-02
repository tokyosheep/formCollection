import * as React from "react";
import styled from "styled-components";

import { centerPlaced } from "../../../styles/mixin";

export const FormArea = styled.li`
    width: 45%;
    height: 200px;
    box-sizing:border-box;
    border-radius: 5px;
    background: linear-gradient(rgba(100,100,100,0.1),rgba(155,155,155,0.1));
    position: relative;
    margin-bottom: 5px;
    & > * {
        ${centerPlaced}
    }
`;

type FormProps = {
    Elm:JSX.Element
}

const FormBox:(props:FormProps)=>JSX.Element = ({Elm}) =>{
    return(
        <FormArea>
            {Elm}
        </FormArea>
    )
}

export default FormBox;