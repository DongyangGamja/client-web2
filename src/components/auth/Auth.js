
import axios from "axios"
import { useState } from "react"
import "./Sign.scss"
import{Link} from "react-router-dom";
import { useMediaQuery } from "react-responsive"
import LoginBackground from "./LoginBakground";
import "./Auth.scss"



<link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>



export default function Auth(){

   
    //우측 이미지 변경
 const [isImg, setIsImg]=useState("0");
    

return(
       
  <div>
  <LoginBackground/>
  <div className="content_container">
          <div className="login_container">
          <div id="Logo">
            <img src="../../../img/LOGO.png" width="50px"></img>
            <Link to ="/"><h1 id="Logo_name">GAMJA</h1></Link>    
        </div>
        <div id="login_item" align="center" >
          <div id="Toptext"></div>
          <h1 id="Gamja_community">Gamja Community</h1>
            <h3>SNS 계정으로 Gamja에 참여하세요!</h3>

            <button id="google_btn">Google 계정으로 로그인</button>
            <br />
            <button id="kakao_btn">Kakao 계정으로 로그인</button>
            <br />
            <Link to={"/auth/login"}>
            <button id="gamja_btn">Gamja 계정으로 로그인</button>
            </Link>
            <h3>
            계정이 없으신가요?? <Link to={"/auth/register"}>회원가입</Link>
            </h3>
            </div>
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
     

    );

};

