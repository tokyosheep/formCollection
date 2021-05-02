import * as React from "react";
import styled,{ keyframes , css } from "styled-components";

import { centerPlaced } from "../../../styles/mixin";

const OverLayer = styled.div`
`;

const rotating = keyframes`
    from{
        transform: translate(-50%,-50%) rotate(0deg);
    }
    to{
        transform: translate(-50%,-50%) rotate(360deg);
    }
`;

const LoadingCircle = styled.div<{size:number,direction?:string}>`
    width: ${props=> props.size}px;
    height: ${props=> props.size}px;
    border-radius: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: ${props=> props.direction  === "right" ? "#fff #fff #fff transparent" : "#fff #fff transparent #fff"};
    ${centerPlaced};
    z-index: 30;
    animation:${rotating} 1.3s linear infinite;
`;

const fading = keyframes`
    0%{
        opacity: 0.3;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0.3;
    }
`;

const LoadingTitile = styled.div<{y:number}>`
    ${centerPlaced};
    top: 70%;
    color: #fff;
    font-size: 20px;
    font-weight: 200;
    animation:${fading} 1.3s linear infinite;
`;

export const CircleLoad = () =>{
    return(
        <OverLayer>
            <LoadingCircle size={120} direction="right"></LoadingCircle>
            <LoadingCircle size={150}></LoadingCircle>
            <LoadingTitile y={0}>
                Loading.....
            </LoadingTitile>
        </OverLayer>
    )
};

const bounding = keyframes`
    0%{
        transform: scale(1);
    }

    50%{
        transform: scale(0.2);
    }

    0%{
        transform: scale(1);
    }
`;

const BallWrapper = styled.ul`
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    list-style:none;
    display: flex;
    justify-content:space-around;
`;

const LoadingBall = styled.li<{left:number}>`
    background: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: scale(1);
    margin: 0;
    animation: ${bounding} 0.9s linear ${props=>(props.left-1)*0.2}s infinite;
`;

export const BoundingBalls = () =>{
    const balls = [1,2,3].map((ball,i)=><LoadingBall left={ball} key={i}></LoadingBall>);
    return(
        <BallWrapper>
            {balls}
        </BallWrapper>
    )
}

const spin = keyframes`
    0%{
        transform:none;
    }
    100%{
        transform:rotate(360deg);
    }
`;

const CircleBox = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const CircleWrapper = styled.div`
    width: 80px;
    height: 80px;
    ${centerPlaced};
`;

const circleShape = css`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
`;

const CircleShadow = styled.div`
    ${circleShape};
    border: 5px solid black;
    z-index: 2;
`;

const CircleLineCore = styled.div`
    ${circleShape};
    border: 5px solid rgb(100,100,250);
    border-right-color: transparent;
    animation: ${spin} .8s infinite linear;
    z-index: 5;
`;

export const CircleLine = () =>{
    return(
        <CircleBox>
            <CircleWrapper>
                <CircleLineCore></CircleLineCore>
                <CircleShadow></CircleShadow>
            </CircleWrapper>
        </CircleBox>
    )
}