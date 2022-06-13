
import axios from "axios"
import { useState } from "react"
import "./Sign.scss"
import{Link} from "react-router-dom";
import { useMediaQuery } from "react-responsive"
import LoginBackground from "./LoginBakground";
import "./NewGamja.scss"



<link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>



/**
 * URL : /auth/gamja
 * 회원가입 후 감자 생성
 *  */
 export default function NewGamja() {
  // 감자 이름 State 관리
  const [inputName, setInputName] = useState()

  // Btn Click -> axiosC 이용한 감자 이름 저장
  const postGamja = () => {
    axios({
      url: "http://3.39.32.181:8001/api/gamja",
      method: "post",
      data: {
        id: localStorage.getItem("i"), // 임시 계정 정보(ID)
        name: inputName,
      },
    })
      .then((res) => {
        // 감자 생성 성공(회원 가입 성공)
        if (res.data.result) {
          localStorage.removeItem("i") // 임시 계정 정보(ID) 삭제
          window.alert(`회원가입 성공!`)
          window.location.replace("/auth/login") // 로그인 페이지 이동
        } else {
          window.alert("회원가입 실패")
        }
      })
      .catch((err) => console.log(err))
  }

   
    //우측 이미지 변경
 const [isImg, setIsImg]=useState("0");
    

return(
       
  <div>
  <LoginBackground/>
  <div className="content_container">
          <div className="login_container">
          <div id="Logo">
            <img src="../../../img/LOGO.png" width="50px"></img>
            <h1 id="Logo_name">GAMJA</h1>
        </div>
        <div id="login_item" align="center" >
          <div id="Toptext"></div>
          <h1 id="Gamja_community">Gamja Community</h1>
                  <h1 id="Creategamja">감자 생성</h1>
                 <img src="../../../img/potato5.png" width="30%"/>
                 

                <div id="Gamjatext">
                <label className="gamja_name">
                <span id="GamjaName"><b>감자이름</b></span>
                <input id="Namecontent" type="text" onChange={(e) => setInputName(e.target.value)} />
                </label>
              <br/>
                  <button id="CreteNamebtn" onClick={postGamja}>감자 만들기</button>
            </div>
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

