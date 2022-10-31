import { useEffect, useState } from "react"
import "./CC_introduce.scss";
import Bottom from "../main/Bottom";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";





export default function CC_introduce() {
  const [logined, setLogined] = useState(false)
 
  return (
  
    <div className="CC_Introduce_container">
        <div className="CC_Introduce_Content" >
            <div id="CC_Introduce_top_txt">칼로리 계산기 가이드</div>
            <img id="CC_introduce_img" src="./CC_img/img1.png" alt="CC_introduce_img"/>
            <img id="CC_introduce_img" src="./CC_img/img2.png" alt="CC_introduce_img"/>
        </div>
        <Bottom/>
    </div>
  )
}

 