import * as React from "react";
import { useCallback} from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";
import StateType from "../../redux/stateType";
import { formMode_check } from "../../redux/actions/modeActions";
import { ModeKeys } from "../../redux/reducer/formMode";

import { MenuButton } from "../parts/radioboxes/radioButtons";
import { Containers } from "../../styles/containers";
const { SideNav } = Containers;

const ButtonList = styled.ul`
    list-style:none;
    padding: 0;
    margin: 0;
`;

const SideCompo = () =>{
    const dispatch = useDispatch();
    const formMode = useSelector((state:StateType)=>state.formMode);
    const handleMenu = useCallback((e:React.ChangeEvent<HTMLInputElement>,name:ModeKeys)=>dispatch(formMode_check(e.target.checked,name)),[formMode]);
    const sideButton = Object.entries(formMode).map(([key,value])=>{
        return (<li key={key}><MenuButton color="#ff99aa" name={key} func={handleMenu} checked={value}/></li>);
    });
    return(
        <SideNav>
            <ButtonList>
                {sideButton}
            </ButtonList>
        </SideNav>
    )
}

export default SideCompo;