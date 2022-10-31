import { useEffect, useState } from "react"
import "./introduce_app.scss";
import Bottom from "../main/Bottom";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";





export default function Introduce_App() {
  const [logined, setLogined] = useState(false)
 
  return (
  
    <div className="Introduce_container">
        <div className="Introduce_Content" >
            <div id="Introduce_top_txt">감자 앱</div>
            <div className="Introduce_flex_box">
                <img id="app_screen" src="./app_img/app_screen.png" alt="app_screen"/>
                <div className="Introduce_flex_box2">
                    <h1>
                        <a>감자</a>를 키우며
                    </h1>
                    <h2>건강한 생활!</h2>
                    <h3>사용자 목표에 따른 경험치 제공!</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4>GAMJA APP은 웹에서 개인에게 제공할 콘텐츠를 추출하고</h4>
                    <h4>CC를 통해 사용자의 데이터를 수집하여 APP으로 제공하며</h4>
                    <h4>사용자의 다이어트 동기부여를 위해</h4>
                    <h4>데이터 기반으로 성장하는 감자키우기 게임을 제공합니다.</h4>
                </div>
            </div>
        </div>
        <Bottom/>
    </div>
  )
}

 