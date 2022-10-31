import { useEffect, useState } from "react"
import{Link} from "react-router-dom";
import "./Sign_Container.scss"





export default function Sign(){


return(
    <div className="Sign_Background_container">
        <img id ="sign_background_img"src="./img/background.png" alt="sign_background_img"/>
        <div className="Sign_content_container">
            <div className="Inner_content_display">
               <div id="Sign_left_box">
                    <Link to="/" style={{ textDecoration: "none" }}><p>GAMJA</p></Link>
                    <img id="copy_right" src="./sign_img/copyright_img.png" alt="copy_right"/>
        
               </div>
               <div id="Sign_right_box">
                    <img  id="Sign_right_img" src="./sign_img/right_img.png" alt="right_img"/>
               </div>
            </div>    
        </div>
    </div>
)    
}   
