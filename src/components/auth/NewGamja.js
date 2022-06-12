import { useState } from "react"
import { axiosC } from "../../axios"
import logo from "./../public/logo_.jpg"
import gamja from "./../public/potato5.png"

/**
 * URL : /auth/gamja
 * 회원가입 후 감자 생성
 *  */
export default function NewGamja() {
  // 감자 이름 State 관리
  const [inputName, setInputName] = useState()

  // Btn Click -> axiosC 이용한 감자 이름 저장
  const postGamja = () => {
    axiosC({
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
          window.location.replace("/auth") // 로그인 페이지 이동
        } else {
          window.alert("회원가입 실패")
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="gamja_box">
      <div className="left_box">
        <img src={logo} />
      </div>
      <div className="right_box">
        <h1>Gamja Community</h1>
        <h3>감자 생성</h3>
        <img src={gamja} />
        <label className="gamja_name">
          <h5>감자 이름</h5>
          <input type="text" onChange={(e) => setInputName(e.target.value)} />
        </label>
        <br />
        <button onClick={postGamja}>감자 만들기</button>
      </div>
    </div>
  )
}
