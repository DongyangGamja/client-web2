import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosC } from "../../../axios"
import "./Reset_Pw.scss"

export default function Reset_Pw() {
  const [input_Gamja_Name, setInput_Gamja_Name] = useState()

  // useEffect -> axios를 활용한 게시글 데이터 요청
  //Id, Pw
  let [inputPw, setInputPw] = useState("")
  let [inputPwc, setInputPwc] = useState("")
  let [CurrentPw, setCurrentPw] = useState("")

  let pwlength = inputPw.length

  // handler 함수들

  const onPasswordHandler = (event) => {
    setInputPw(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setInputPwc(event.currentTarget.value)
  }

  const onCurrentPasswordHandler = (event) => {
    setCurrentPw(event.currentTarget.value)
  }


  const Update = () => {
    if (confirm("정말로 수정하시겠습니까?") == true) {
      if(localStorage.getItem("userPw") ==CurrentPw ){
      axiosC
        .patch(
          "http://210.90.136.10:3030/api/user/password",
          {
            password: inputPw,
          },
          {
            headers: {
              accesstoken: localStorage.getItem("accessToken"),
            },
          }
        )
        .then((res) => {
          if (res.data) {
            console.log(res.data)
            localStorage.removeItem("userPw")
            localStorage.setItem("userPw", inputPw)
            window.alert("비밀번호 변경완료")
            window.location.replace("/")            
          } else {
            window.alert("저장실패, 네트워크를 확인해주세요.")
          }
        })
      }else{
      window.alert("현재 비밀번호를 다시 확인해주세요")
      }
    }
    }


  return (
    <div>
      <div className="Sign_Background_container">
        <img
          id="sign_background_img"
          src="./img/background.png"
          alt="sign_background_img"
        />
        <div className="Sign_content_container">
          <div className="Inner_content_display">
            <div id="Sign_left_box">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p>GAMJA</p>
              </Link>
              <div className="Reset_Pw_content">
                <h2>비밀번호 변경</h2>
                <Link to ="/My_Page"><img id="Reset_Pw_back_btn" src="./my_page/back_btn.png" alt="Rename_back_btn"/></Link>
                <input
                  type="password"
                  id="Reset_Pw_IdPw"
                  onChange={onPasswordHandler}
                  placeholder="재설정 비밀번호"
                  required
                ></input>
                {inputPw != "" && pwlength < 4 ? (
                  <div id="Reset_pwCheck1">4자리 이상 입력해주세요</div>
                ) : (
                  <div id="Reset_pwCheck1"></div>
                )}
                <input
                  type="password"
                  id="Reset_Pw_IdPw"
                  onChange={onConfirmPasswordHandler}
                  placeholder="재설정 비밀번호 확인"
                  required
                ></input>
                {inputPwc != "" && inputPw != inputPwc ? (
                  <div id="Reset_pwCheck2">비밀번호가 일치하지 않습니다.</div>
                ) : (
                  <div id="Reset_pwCheck2"></div>
                )}
                <input
                  type="password"
                  id="Reset_Pw_IdPw"
                  onChange={onCurrentPasswordHandler}
                  placeholder="현재 비밀번호 입력"
                  required
                ></input>

                <button id="Reset_Pw_submit" onClick={Update} >
                  저장
                </button>
              </div>
              <img
                id="copy_right"
                src="./sign_img/copyright_img.png"
                alt="copy_right"
              />
            </div>
            <div id="Sign_right_box">
              <img
                id="Sign_right_img"
                src="./sign_img/right_img.png"
                alt="right_img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
