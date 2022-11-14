import { useEffect, useState } from "react"
import "./CC_introduce.scss"
import Bottom from "../main/Bottom"
import { Routes, Route, Link } from "react-router-dom"

export default function CC_introduce() {
  const [logined, setLogined] = useState(false)

  return (
    <div className="CC_Introduce_container">
      <div className="CC_Introduce_Content">
        <div id="CC_Introduce_top_txt">칼로리 계산기 가이드</div>
        <div className="CC_Introduce_flex_box">
          <img
            id="CC_introduce_img"
            src="./CC_img/img1.png"
            alt="CC_introduce_img"
          />
          <div className="CC_Introduce_flex_box2">
            <h1>쉽고빠른</h1>
            <h2>칼로리 파악</h2>
            <h3>
              카메라와 무게 센서를 이용하여 <br></br>사용자의 식단 칼로리 분석
              및<br></br> 사용자 맞춤 피드백 제공
            </h3>
          </div>
        </div>
        <div className="CC_Introduce_flex_box">
          <img
            id="CC_introduce_img2"
            src="./CC_img/img2.png"
            alt="CC_introduce_img"
          />
          <div className="CC_Introduce_flex_box3">
            <h1>언제 어디서나</h1>
            <h2>칼로리 파악</h2>
            <h3>
              내장 디스플레이를 통해 파악된<br></br> 음식 정보 및 칼로리 정보를 제공 <br></br>앱과
              웹에 연동하여<br></br> 언제 어디서나 식단 기록 확인
            </h3>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  )
}
