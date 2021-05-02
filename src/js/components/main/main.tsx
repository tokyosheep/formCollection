import * as React from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";
import Statetype from "../../redux/stateType";
import { ModeKeys , FormMode } from "../../redux/reducer/formMode";

import { Containers } from "../../styles/containers";
const { Main } = Containers;

import ButtonsList from "./buttons/buttonList";
import CheckBoxList from "./checkboxes/checkBoxList";
import RadioButtonList from "./radioboxes/radioBoxes";
import SelectorList from "./selectors/selectorsBox";
import TextBoxList from "./textBoxes/textBoxes";
import RadioSelectorList from "./selectorRadio/selectorList";
import LoadingList from "./loadings/loadingList";

const setFormComposition:(formMode:FormMode)=>JSX.Element = formMode =>{

    const mode = Object.entries(formMode).find(([key,value])=>value === true);
    switch(mode[0]){
        case "buttons":
            return(<ButtonsList />);

        case "checkboxes":
            return(<CheckBoxList />);

        case "radioboxes":
            return(<RadioButtonList />);

        case "selectors":
            return(<SelectorList />);

        case "textboxes":
            return(<TextBoxList />);

        case "selectorRadio":
            return(<RadioSelectorList />);

        case "loading":
            return(<LoadingList />);

        default:
            return(<ButtonsList />);
    }
}

const MainCompo = () =>{
    const dispatch = useDispatch();
    const formMode = useSelector((state:Statetype)=> state.formMode);
    return(
        <Main>
            {setFormComposition(formMode)}
        </Main>
    )
}

export default MainCompo;