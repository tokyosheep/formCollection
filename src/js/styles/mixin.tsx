import styled,{css} from "styled-components";
import { darken, rgba } from "polished";

export const centerPlaced = css<{add?:string,y?:number,x?:number}>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${props=> `translate(${props.x || "-50"}%,${props.y || "-50"}%)` + (props.add || "")};
`;

export const StdTitle = styled.h3`
    font-size: 20px;
    font-weight: 300;
    color: #fff;
`;

export const shineStyle = css<{color:string,checked:boolean}>`
    box-shadow:0px 0px 3px 3px ${props=>props.checked ? rgba(props.color,0.4) : rgba(props.color,0.2)};
    border: 1px solid ${props=> props.checked ? props.color : darken(0.3,props.color)};
    transition: .3s linear;
`;

export const shineTitle = css<{color:string,checked:boolean}>`
    color: ${props=> props.checked ? props.color : darken(0.3,props.color)};
    text-shadow:0px 0px 5px ${props=> props.checked ? rgba(props.color,0.8) : rgba(props.color,0.4) };
    transition: .3s linear;
`;