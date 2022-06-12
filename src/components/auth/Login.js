import { useState } from "react"
import { axiosC } from "./../../axios"
import logo from "./../public/logo_.jpg"
/**
 * URL : /auth/login
 * 로그인, 회원 가입 선택
 *  */
export default function Login() {
  // ID, PW State 관리
  const [inputId, setInputId] = useState()
  const [inputPw, setInputPw] = useState()

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

  return (
    <div className="login_box">
      <div className="left_box">
        <img src={logo} width="100%" />
      </div>
      <div className="right_box">
        <h1>Gamja Community</h1>
        <h3>Login</h3>
        <label className="input_id">
          <h5>아이디</h5>
          <input type="text" onChange={(e) => setInputId(e.target.value)} />
        </label>
        <label className="input_pw">
          <h5>비밀번호</h5>
          <input type="password" onChange={(e) => setInputPw(e.target.value)} />
        </label>
        <br />
        <button onClick={postLogin}>로그인</button>
      </div>
    </div> //로그인 박스
  )
}
