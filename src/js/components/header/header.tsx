import * as React from "react";
import styled from "styled-components";

import { Containers } from "../../styles/containers";
const { Header } = Containers;

const MainTitle = styled.h1`
    font-size: 20px;
    font-weight: 300;
    color: #fff;
`;

const HeaderCompo = () =>{
    return(
        <Header>
            <MainTitle>form collections</MainTitle>
        </Header>
    )
}

export default HeaderCompo;