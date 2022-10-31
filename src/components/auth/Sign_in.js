import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosC } from "../../axios"
import Sign from "./Sign_Container"
import "./Sign_in.scss"
import styled from "styled-components"

export default function Sign_in() {

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
      url: "http://210.90.136.10:3030/api/user/local",
      method: "post",
      data: {
        email: inputId,
        password: inputPw,
      },
    })
      .then((res) => {
        console.log(res.data)      
        //Login 성공
        if (res.data) {
           console.log(res.data.gamja)
           localStorage.setItem("accessToken", res.data.token) // JWT 저장, (key : value) 형식
           localStorage.setItem("loginId", res.data.user.email) // 계정 정보(id) 저장
           localStorage.setItem("loginName", res.data.user.name) // 계정 정보(이름) 저장
           localStorage.setItem("userPw", inputPw) 
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
 
 
  

  return (

    <div className="Sign_in_Background_container">
      <Sign />
      <div className="Sign_in_content">
        <h2>로그인</h2>
        <input
          type="text"
          id="sign_in_IdPw"
          placeholder="아이디 입력"
          onChange={(e) => setInputId(e.target.value)}
          required
        ></input>
        <input
          type={isRevealPassword ? "text" : "password"}
          id="sign_in_IdPw"
          onChange={(e) => setInputPw(e.target.value)}
          placeholder="비밀번호 입력"
          required
        ></input>
        <p id="sign_in_pw_visible" onClick={togglePassword}>
          {isRevealPassword ? (
            <img src="../../../img/killeyes.png"></img>
          ) : (
            <img src="../../../img/eyes.png"></img>
          )}
        </p>
            <div id="find_pw">비밀번호 찾기</div>
            <button id="sign_in_submit" onClick={postLogin}>로그인</button>
            <div id="Login_Mode_bottom_txt">계정을 보유하고있지 않습니까?{" "}
             <Link to="/sign_up" style={{ textDecoration: "none" }}><a>회원가입</a></Link></div>
        </div>
    </div>
  )
}
