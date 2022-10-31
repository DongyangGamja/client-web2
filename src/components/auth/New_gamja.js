import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosC } from "../../axios"
import Sign from "./Sign_Container"
import "./New_gamja.scss"
import styled from "styled-components"

export default function New_gamja() {

    const [inputName, setInputName] = useState()

    // Btn Click -> axiosC 이용한 감자 이름 저장
    const postGamja = () => {
    
      axiosC({
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
        url: "http://210.90.136.10:3030/api/gamja",
        method: "post",
        data: {
          name: inputName,
        },
      })
        .then((res) => {
          // 감자 생성 성공(회원 가입 성공)
          if (res.data) {
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
    <div className="New_gamja_Background_container">
      <Sign />
      <div className="New_gamja_content">
        <h2>감자생성</h2>
        <img
          id="New_gamja_img"
          src="./img/GAMJA_join.png"
          alt="New_gamja_img"
        />
        <input
          type="text"
          id="gamja_Name_input"
          placeholder="감자이름 입력"
          onChange={(e) => setInputName(e.target.value)}
          required
        ></input>
        <button id="create_gamja_btn" onClick={postGamja}>감자생성</button>
        <div id="New_gamja_bottom_txt">당신에게 행운을 가져다줄 감자</div>
      </div>
    </div>
  )
}
