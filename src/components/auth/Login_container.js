import { useState } from "react"
import "./Login.scss"
import Login_side from "./Login_side"
import { useMediaQuery } from "react-responsive"
import LoginBackground from "./LoginBakground"
<link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>

export default function Login(){
    
    //우측 이미지 변경
    const [isImg, setIsImg]=useState("0");
    

return( 
    <div>
    <LoginBackground/>
    <div className="content_container">
            <div className="login_container">
            <Login_side/>
            </div>


            <div className="sub_container">
            
                {isImg ==="0" ? <img src="../../../img/img1.png" alt="picture" width="720px"></img> : null}
                {isImg ==="1" ? <img src="../../../img/img2.png" alt="picture" width="720px"></img>: null}
                {isImg ==="2" ? <img src="../../../img/img3.png" alt="picture" width="720px"></img>: null}
                <div className="list_view">
                    <button id="list_img" value="0" onMouseOver={(e)=> setIsImg(e.target.value)}></button>
                    <button id="list_img" value="1" onMouseOver={(e)=> setIsImg(e.target.value)}></button>
                    <button id="list_img" value="2" onMouseOver={(e)=> setIsImg(e.target.value)}></button>
                </div>
            </div>
        </div>
        </div>


)



    
}   
