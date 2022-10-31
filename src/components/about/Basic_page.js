import { useEffect, useState } from "react"
import "./Basic_page.scss";
import Bottom from "../main/Bottom";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";





export default function Basic_page() {
  const [logined, setLogined] = useState(false)
 
  return (
  
    <div className="Basic_page_container">
        <div className="Basic_page_Content" >
         <img id="basic_page_img" src="./main_img/basic_page_img.png" alt="basic_page_img"></img>
         <img id="basic_page_img2" src="./main_img/basic_page_img2.png" alt="basic_page_img2"></img>
        </div>
        <Bottom/>
    </div>
  )
}

 