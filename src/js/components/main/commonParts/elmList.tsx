import * as React from "react";
import styled from "styled-components";

export const ElmList = styled.ul`
    list-style:none;
    padding: 0;
    display: flex;
    justify-content:space-around;
    flex-wrap:wrap;
    width: 100%;
`;

export const ElmCell = styled.li`
    background:rgba(150,150,150,0.2);
    width: 45%;
    height: 230px;
    padding: 10px;
    box-sizing:border-box;
    border-radius: 5px;
    margin-bottom: 5px;
`;

