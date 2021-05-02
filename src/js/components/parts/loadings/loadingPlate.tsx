import * as React from "react";
import styled,{ keyframes , css } from "styled-components";

import { centerPlaced } from "../../../styles/mixin";

const PlateSize = 30;

const RangeSize = 140;

const edgeOfRange = (RangeSize-PlateSize)+"px";

const Rotating = keyframes`
    0%{
        transform: translate(0px,0px) rotateX(0deg) rotateY(0deg);
    }

    25%{
        transform: translate(${edgeOfRange},0px) rotateX(180deg) rotateY(0deg);
    }

    50%{
        transform: translate(${edgeOfRange},${edgeOfRange}) rotateX(180deg) rotateY(180deg);
    }

    75%{
        transform: translate(0px,${edgeOfRange}) rotateX(360deg) rotateY(180deg);
    }
    100%{
        transform: translate(0px,0px) rotateX(360deg) rotateY(360deg);
    }
`;

const PlateBox = styled.div`
    height: ${RangeSize}px;
    width: ${RangeSize}px;
    position: relative;
`;

const PlateWrapper = styled.div`
    width: 100%;
    height: 100%;
    ${centerPlaced};
`;

const Plate = styled.div<{index:number}>`
    width: ${PlateSize}px;
    height: ${PlateSize}px;
    background: rgb(200,200,200);
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0px,0px) rotateX(0deg) rotateY(0deg);
    animation: ${Rotating} 2s infinite linear ${props=>props.index}s;
`;

export const PlateLoading = () =>{
    const plates = [0,1].map((n)=><Plate key={n} index={n}></Plate>);
    return(
        <PlateBox>
            <PlateWrapper >
                {plates}
            </PlateWrapper>
        </PlateBox>
    )
}