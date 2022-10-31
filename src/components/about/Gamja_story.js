import { useEffect, useState } from "react"
import "./Gamja_story.scss";
import Bottom from "../main/Bottom";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";





function Gamja() {
  const [logined, setLogined] = useState(false)
  useEffect(() => {
    localStorage.getItem("accessToken") ? setLogined(true) : setLogined(false)
  }, logined)
 
  return (
  
    <div className="GAMJA_Stroy_container">
        <div className="Stroy_Content" >
          <div id="Story_top_txt">감자 이야기</div>
          <div className="stroy_container">
            <img id="gamja_img" src="./gamja_story/gamja_img.png" alt="gamja_img"></img>
          </div>
          <div id="Story_top_txt">국내시장 규모</div>
          <img id="gamja_data" src="./gamja_story/data.png" alt="gamja_data"></img>
        </div>
        <Bottom/>
    </div>
  )
}

export default Gamja