import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosC } from "../../../axios"
import "./Rename_Gamja.scss"

export default function Rename_Gamja() {
  const [input_Gamja_Name, setInput_Gamja_Name] = useState()
  const [inputName, setInputName] = useState()

  // useEffect -> axios를 활용한 게시글 데이터 요청

  //게시글 업데이트
  const Update = () => {
    if (confirm("정말로 수정하시겠습니까?") == true) {
      axiosC
        .patch(
          "http://210.90.136.10:3030/api/gamja",
          {
            name: input_Gamja_Name,
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
            localStorage.removeItem("gamja_name")
            localStorage.setItem("gamja_name", input_Gamja_Name)            
          } else {
            window.alert("저장실패, 네트워크를 확인해주세요.")
          }
        })

        axiosC
        .patch(
          "http://210.90.136.10:3030/api/user/name",
          {
            name: inputName,
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
            window.alert("저장완료")
            localStorage.removeItem("loginName")
            localStorage.setItem("loginName", inputName)
            window.location.replace("/")
            
          } else {
            window.alert("저장실패, 네트워크를 확인해주세요.")
          }
        })
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
              <div className="Rename_gamja_content">
                <h2>나의 감자</h2>
                <h3>회정정보 수정</h3>
                <Link to ="/My_Page"><img id="Rename_back_btn" src="./my_page/back_btn.png" alt="Rename_back_btn"/></Link>
                <img
                  id="Rename_gamja_img"
                  src="./img/GAMJA_join.png"
                  alt="Rename_gamja_img"
                />
                <input
                  type="text"
                  id="gamja_Name_input"
                  placeholder="변경할 감자이름 입력"
                  onChange={(e) => setInput_Gamja_Name(e.target.value)}
                  required
                ></input>
                 <input
                  type="text"
                  id="gamja_Name_input"
                  placeholder="변경할 닉네임 입력"
                  onChange={(e) => setInputName(e.target.value)}
                  required
                ></input>
                <button id="create_gamja_btn" onClick={Update}>
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
