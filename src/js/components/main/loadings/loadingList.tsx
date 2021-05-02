import * as React from "react";
import styled from "styled-components";
import { ElmList } from "../commonParts/elmList";
import FormBox from "../commonParts/formBox";

import { CircleLoad , BoundingBalls , CircleLine } from "../../parts/loadings/loadings";
import { PlateLoading } from "../../parts/loadings/loadingPlate";

const LoadingList = () =>{
    const loads = [CircleLoad,BoundingBalls,CircleLine,PlateLoading].map((Elm,i)=><FormBox key={i} Elm={<Elm></Elm>}></FormBox>);
    return(
        <ElmList>
            {loads}
        </ElmList>
    )
}

export default LoadingList;