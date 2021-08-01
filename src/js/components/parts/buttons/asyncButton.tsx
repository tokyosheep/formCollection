import * as React from "react";
import { useState } from "react";
import styled from "styled-components";


const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`;



const AsyncButtonStyle  = styled.button<{color:string}>`
    border: solid 1px ${props=>props.color};
    color: #fff;
    font-size: 12px;
    background: rgba(0,0,0,0);
    width: 150px;
    height: 25px;
    border-radius: 5px;
    margin: auto 0px;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:hover{
        background: rgba(255,255,255,0.2);
    }
    &:active{
        background: rgba(0,0,0,0.6);
    }
`;

const CountTitle = styled.h3`
    color: #fff;
    margin: auto 0px;
    font-size: 15px;
    font-weight: 300;
`;

class AwaitCounting{
    timeId = null;
    accept = null;
    deny = null;
    syncTime=null;
    constructor(){
        
    }

    init = ()=>{
        this.syncTime=()=>{
            return new Promise((resolve,reject)=>{
                this.accept = resolve;
                this.deny = reject;
                this.timeId = setTimeout(()=>{
                    this.accept("OK");
                },3000);
            })
        }
    }

    rejects = ()=>{
        if(this.timeId===null)return;
        console.log(this);
        clearTimeout(this.timeId);
        this.timeId = null;
        console.log("cancelled");
        this.deny("Error");
    }

    /* useStateのカウントset関数をとる */
    launchCount:(func:(v:boolean)=>void)=>Promise<void> = async(func)=>{
        func(true);
        try{
            const msg = await this.syncTime();
            alert(msg);
        }catch(e){
            alert(e);
        }finally{
            this.init();
            func(false);
        }
    }
}

/*
キャンセルが可能な非同期処理
*/

export const AsyncButton = () =>{
    const [count,setCount] = useState(false);/*count中の状態を管理 */
    const [awaitStatus] = useState(new AwaitCounting());/* promise　オブジェクトは必ずuseStateに入れる */
    awaitStatus.init();/*初期化*/
    return(
        <ButtonWrapper>
            <CountTitle>{count ? "counting" : "waiting you click"}</CountTitle>
            <AsyncButtonStyle color="#eea210" onClick={()=>{
                awaitStatus.rejects();
                setCount(false);
            }}>
                cancel
            </AsyncButtonStyle>
            <AsyncButtonStyle color="#2198ef" onClick={()=>{
                awaitStatus.launchCount(setCount);
            }}>
                click
            </AsyncButtonStyle>
        </ButtonWrapper>
    )
}
