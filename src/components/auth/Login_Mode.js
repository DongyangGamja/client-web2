import { useEffect, useState } from "react"
import{Link} from "react-router-dom";
import { axiosC } from "../../axios";
import Sign from "./Sign_Container";
import "./Login_Mode.scss"
import styled from "styled-components";



export default function Login_Mode(){

    const Login_Button = styled.button`
    font-size: 1.2vw;
    width: 20vw;
    height: 3vw;
    font-weight: 550;
    margin-bottom: 1.2vw;
    border-radius: 0.5vw;
    margin-left: 5vw;
    cursor: pointer;
    &:hover{
        color: rgb(120, 120, 120);
    }
    `;
    const KaKao_btn =styled(Login_Button)`
    background-color:#FFEB00 ;
    border: 0.1vw solid #000;
    color: #000;
`;

    const GAMJA_btn =styled(Login_Button)`
    background-color:#FFF ;
    border: 0.1vw solid #F2CD8F;
    margin-left:0;
    
`;

return(

    <div className="Login_Mode_Background_container"> 
        <Sign/>
        <div className="Login_Mode_content">
            <h2>감자 이야기</h2>
            <p>SNS 계정으로 GAMJA에 참여하세요.</p>
            <KaKao_btn>KaKao 계정으로 로그인</KaKao_btn>
            <Link to="/sign_in" style={{ textDecoration: "none" }}><GAMJA_btn>GAMJA 계정으로 로그인</GAMJA_btn></Link>
            <div id="Login_Mode_bottom_txt">계정을 보유하고있지 않습니까?{" "}
             <Link to="/sign_up" style={{ textDecoration: "none" }}><a>회원가입</a></Link></div>
        </div>
       
        
    </div>
)    
}   