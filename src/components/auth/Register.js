import { useState } from "react"
import logo from "./../public/logo_.jpg"
import { axiosC } from "../../axios"
/**
 * URL : /auth/register
 * 회워 가입
 *  */
export default function Register() {
  // id, pw, pwc, name을 State 관리
  let [inputId, setInputId] = useState()
  let [inputPw, setInputPw] = useState()
  let [inputPwc, setInputPwc] = useState()
  let [inputName, setInputName] = useState()

  //Btn Click -> AxiosC 이용한 회원가입 요청
  const postRegister = () => {
    // PW와 PWC의 동일 여부에 따른 분기 처리(삼항 연산자 사용)
    inputPw === inputPwc
      ? // PW, PWC가 같음(회원 가입 진행)
        axiosC({
          url: "http://3.39.32.181:8001/api/auth/register",
          method: "post",
          data: {
            id: inputId,
            pw: inputPw,
            name: inputName,
          },
        })
          .then((res) => {
            // 회원 가입 성공
            if (res.data.result) {
              localStorage.setItem("i", inputId) //임시 계정 정보(ID) 저장
              window.alert("회원가입 성공!")
              window.location.replace("/auth/gamja") //감자 생성 페이지 이동
            } else {
              window.alert("중복된 아이디가 있습니다.") //회원 가입 실패, 중복 아이디
            }
          })
          .catch((err) => console.log(err))
      : //PW와 PWC가 같지 않은 분기 처리
        window.alert("비밀번호와 비밀번호 확인이 같지 않습니다.")
  }

  return (
    <div className="register_box">
      <div className="left_box">
        <img src={logo} />
      </div>
      <div className="right_box">
        <h1>Gamja Community</h1>
        <h3>회원가입</h3>
        <label className="input_id">
          <h5>아이디</h5>
          <input type="text" onChange={(e) => setInputId(e.target.value)} />
        </label>
        <label className="input_pw">
          <h5>비밀번호</h5>
          <input type="password" onChange={(e) => setInputPw(e.target.value)} />
        </label>
        <label className="input_pwc">
          <h5>비밀번호 확인</h5>
          <input
            type="password"
            onChange={(e) => setInputPwc(e.target.value)}
          />
        </label>
        <label className="input_name">
          <h5>사용자 이름</h5>
          <input type="text" onChange={(e) => setInputName(e.target.value)} />
        </label>
        <br />
        <button onClick={postRegister}>회원가입</button>
      </div>
    </div>
  )
}
