import axios from "axios"
import { useEffect, useState } from "react"
import "./Login.scss"
import { axiosC } from "./../../axios"
import{Link} from "react-router-dom";
import { useMediaQuery } from "react-responsive"
<link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>




export default function Login_side1(){

//PW 숨기기/보기
const [isRevealPassword, setIsRevealPassword] = useState(false);
//Id, Pw
const [inputId, setInputId] = useState()
const [inputPw, setInputPw] = useState()

const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  }



  // Btn click -> axiosC Login Post 요청
  const postLogin = () => {
    axiosC({
      url: "http://3.39.32.181:8001/api/auth/login",
      method: "post",
      data: {
        id: inputId,
        pw: inputPw,
      },
    })
      .then((res) => {
        //Login 성공
        if (res.data.result) {
          localStorage.setItem("accessToken", res.data.token) // JWT 저장, (key : value) 형식
          localStorage.setItem("loginId", res.data.info[1]) // 계정 정보(id) 저장
          localStorage.setItem("loginName", res.data.info[0]) // 계정 정보(이름) 저장
          window.alert(`안녕하세요! ${localStorage.getItem("loginName")}님`) // 계정 정보(이름) 이용
          window.location.replace("/") // 기본 경로로 이동
        }
        //Login 실패
        else {
          window.alert("로그인 실패")
        }
      })
      .catch((err) => console.log(err))
  }
 
 
  
return(


<div id="Login_main">
<div id="Logo">
     <img src="../../../img/LOGO.png" width="50px"></img>
     <Link to ="/"><h1 id="Logo_name">GAMJA</h1></Link>    
</div>
<div className="table_container" align="center" >
   
     <div className="Login_text"><b><p>Login</p></b></div>
     <input type="text" id="IdPw" placeholder="Email" onChange={(e) => setInputId(e.target.value)}  required></input>
     <input type={isRevealPassword ? 'text' : 'password'} 
     id="IdPw" 
     onChange={(e) => setInputPw(e.target.value)}
     placeholder="Password"  required></input>
     <p
     id="Pw_visible"
     onClick={togglePassword}>
     {isRevealPassword ? <img src="../../../img/killeyes.png" width="30px"></img>:<img src="../../../img/eyes.png" width="30px" ></img>}
     </p> 
     <div className="text_container">
     <input type="checkbox" ></input>아이디 기억하기
     <div id="Forgot_text"><a href="#">비밀번호 찾기</a></div>
     </div>                       
     <button 
     id="Login_btn"
     name="login"
     onClick={postLogin}
     >Login</button>
     <div className="get_Start_container">
        <b><div id="Account">계정이 없으신가요? <Link to ={"/auth/register"}><span id="Get_Start">회원가입</span></Link></div></b> 
     </div>
    
   
 </div>
</div>);
};

