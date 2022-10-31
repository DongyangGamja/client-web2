import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosC } from "../../axios"
import Sign from "./Sign_Container"
import "./Sign_up.scss"
import styled from "styled-components"

export default function Sign_up() {


//Id, Pw
let [inputId, setInputId] = useState("")
let [inputPw, setInputPw] = useState("")
let [inputPwc, setInputPwc] = useState("")
let [inputName, setInputName] = useState("")

let pwlength = inputPw.length;

 // handler 함수들
 const onEmailHandler = (event) => {
  setInputId(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setInputName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setInputPw(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setInputPwc(event.currentTarget.value);
  };



  //axios를 통한 회원가입 요청
  const reqRegister = () => {
    if(inputId ==="" || inputPw ==="" || inputName==="" || inputPwc =="" ){
      window.alert("정확한 정보를 입력해주세요")
    }
    else{
    inputPw === inputPwc && pwlength >=4//PW, PWC가 같음(회원가입 진행)
      ? axiosC({
          url :  "http://210.90.136.10:3030/api/user",
          method: "post",
          data: {
            email: inputId,
            password: inputPw,
            name: inputName,
          },
        })
          .then((res) => {
            if (res.data) {
              localStorage.setItem("accessToken", res.data.token)
              localStorage.setItem("i", inputId) //임시 계정정보(ID) 저장
              window.alert("당신의 감자의 이름을 지어주세요!")
              window.location.replace("/New_gamja")//감자 생성 페이지 이동
            } else {
              window.alert("ERR : ID가 중복되었습니다.")//회원 가입 실패
            }
          })
          .catch((err) => console.log(err))
      : window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
  }}
  

 
  

  return (
    <div className="Sign_up_Background_container">
      <Sign />
      <div className="Sign_up_content">
        <h2>회원가입</h2>
        <input
          type="text"
          id="sign_up_IdPw"
          placeholder="아이디 입력"
          onChange={onEmailHandler}
          required
        ></input>
        <input
          type="text"
          id="sign_up_IdPw"
          placeholder="닉네임 입력"
          onChange={onNameHandler}
          required
        ></input>
        <input
          type="password"
          id="sign_up_IdPw"
          onChange={onPasswordHandler}
          placeholder="비밀번호 입력"
          required
        ></input>
        {inputPw !="" && pwlength <4 ? <div id="pwCheck1">4자리 이상 입력해주세요</div> : <div id="pwCheck1"></div>}
        <input
          type="password"
          id="sign_up_IdPw"
          onChange={onConfirmPasswordHandler}
          placeholder="비밀번호 확인"
          required
        ></input>
        {inputPwc!="" && inputPw !=inputPwc ? <div id="pwCheck2">비밀번호가 일치하지 않습니다.</div> : <div id="pwCheck2"></div>}

        

            <button id="sign_up_submit" onClick={reqRegister} >다음</button>
            <div id="Login_Mode_bottom_txt">계정을 보유하고 계십니까?{" "}
             <Link to="/sign_in" style={{ textDecoration: "none" }}><a>로그인</a></Link></div>
        </div>
    </div>
  )
}
