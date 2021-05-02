import * as React from "react";

import { createGlobalStyle } from "styled-components";
import { Containers } from "../styles/containers";
const { Container } = Containers;

import HeaderCompo from "../components/header/header";
import SideComp from "../components/sideNav/sideNav";
import MainCompo from "../components/main/main";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;
        background: linear-gradient(rgb(10,15,15), rgb(30,40,45),rgb(15,15,15));
    }
`;

const Layout = () =>{
    return(
        <>
            <GlobalStyle />
            <Container>
                <HeaderCompo />
                <SideComp />
                <MainCompo />
            </Container>
        </>
    )
}

export default Layout;