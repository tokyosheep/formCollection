import styled from "styled-components";



export const Containers = {
    Container:styled.div`
        display:grid;
        grid-template-columns:200px minmax(300px,1fr);
        grid-template-rows:100px minmax(300px,1fr);      
        grid-template-areas:
        "header header"
        "nav main"
        ;
    `,
    Header:styled.header`
        grid-area:header;
    `,
    SideNav:styled.nav`
        grid-area:nav;
        background:rgba(0,0,0,0.2);
    `,
    Main:styled.main`
        grid-area:main;
    `,
}