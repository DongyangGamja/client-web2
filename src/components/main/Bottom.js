import { useEffect, useState } from "react"
import "./Bottom.scss";

import {
  Routes,
  Route,
  Link
} from "react-router-dom";





function Bottom() {
  const [logined, setLogined] = useState(false)
  useEffect(() => {
    localStorage.getItem("accessToken") ? setLogined(true) : setLogined(false)
  }, logined)
 
  return (
    <div className="Bottom_container">
        <img id="bottom_line" src="./bottom/bottom_line.png" alt="bottom_line"/>
        <div id="Bottom_txt1">GAMJA</div>
        <div id="Bottom_txt2">We always make our players happy by providing as</div>
        <div id="Bottom_txt3">many experiences as possible</div>
        <div>
            <img id="bottom_icon" src="./bottom/facebook_icon.png"></img>
            <img id="bottom_icon" src="./bottom/twitter_icon.png"></img>
            <img id="bottom_icon"src="./bottom/instagram_icon.png"></img>
        </div>
    </div>
  )
}

export default Bottom