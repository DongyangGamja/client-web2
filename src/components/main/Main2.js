import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { axiosC } from "../../axios"
// eslint-disable-line no-unused-vars
import "./Main2.scss"
import Gamja from "../about/index"
import Introduce_App from "../about/introduce_app"
import CC_introduce from "../about/CC_introduce"
import Basic_page from "../about/Basic_page"
import List from "../board/List2"
import User_Calorie from "../about/User_Calorie"

export default function Main({ name }) {
  const [isImg1, setIsImg1] = useState("0")
  const [isImg2, setIsImg2] = useState("0")
  const [isImg3, setIsImg3] = useState("0")
  const [isImg4, setIsImg4] = useState("0")

  const [isImg_click1, setIsImg_click1] = useState("0")
  const [isImg_click2, setIsImg_click2] = useState("0")
  const [isImg_click3, setIsImg_click3] = useState("0")
  const [isImg_click4, setIsImg_click4] = useState("0")
  const [isImg_click5, setIsImg_click5] = useState("0")

  const [logined, setLogined] = useState(false)

  const Go_to_Main = () => {
    setIsImg_click1("0")
    setIsImg_click2("0")
    setIsImg_click3("0")
    setIsImg_click4("0")
    setIsImg_click5("0")
  }

  const ClickMenu1 = () => {
    setIsImg_click1("1")
    setIsImg_click2("0")
    setIsImg_click3("0")
    setIsImg_click4("0")
    setIsImg_click5("0")
  }

  const ClickMenu2 = () => {
    setIsImg_click1("0")
    setIsImg_click2("1")
    setIsImg_click3("0")
    setIsImg_click4("0")
    setIsImg_click5("0")
  }

  const ClickMenu3 = () => {
    setIsImg_click1("0")
    setIsImg_click2("0")
    setIsImg_click3("1")
    setIsImg_click4("0")
    setIsImg_click5("0")
  }

  const ClickMenu4 = () => {
    setIsImg_click1("0")
    setIsImg_click2("0")
    setIsImg_click3("0")
    setIsImg_click4("1")
    setIsImg_click5("0")
  }

  const ClickMenu5 = () => {
    setIsImg_click1("0")
    setIsImg_click2("0")
    setIsImg_click3("0")
    setIsImg_click4("0")
    setIsImg_click5("0")
    setIsImg_click5("1")
  }

  useEffect(() => {
    localStorage.getItem("accessToken") ? setLogined(true) : setLogined(false)
  }, [logined])
  // Profile 클릭 시, JWT 검증 후 페이지 이동

  const getJwtCheck = () => {
    // JWT 여부에 따른 분기 처리
    if (localStorage.getItem("accessToken")) {
      axiosC.get("http://210.90.136.10:3030/jwt").then((res) => {
        // JWT 인증 실패 분기
        if (!res.data.result) {
          window.alert("로그인 하세요!")
          window.location.replace("/auth") // 로그인 페이지 이동
        } else {
          // JWT 인증 성공 분기
          window.location.replace("/profile") // Profile 페이지 이동
        }
      })
    } else {
      // JWT 보유 X 분기
      window.alert("로그인 하세요!")
      window.location.replace("/auth") // 로그인 페이지 이동
    }
  }
  // Logout Click -> logout
  const clickLogout = () => {
    // 보유한 계정 정보 전부 삭제
    localStorage.removeItem("accessToken")
    localStorage.removeItem("loginId")
    localStorage.removeItem("loginName")
    localStorage.removeItem("gamja_name")
    // 메인 창으로 재이동
    window.location.replace("/")
  }
  // 로그인 여부에 따른 분기 처리

  //감자이름 가져오기
  const get_Gamja_name = () => {
    axiosC
      .get("http://210.90.136.10:3030/api/gamja", {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res.data.name)
        localStorage.setItem("gamja_name", res.data.name) //감자이름 저장
      })
  }

  useEffect(() => {
    get_Gamja_name()
  }, [])

  return (
    <div className="Main_Top_Background">
      <div className="Main_logo" onClick={Go_to_Main}>
        GAMJA
      </div>

      <div className="login_profile_container">
        <div className="login_psrofile_content">
          <div id="login_mode_about">
            {logined
              ? "안녕하세요, " + localStorage.getItem("loginName") + "님"
              : "Guest Mode"}
          </div>
          <div id="login_mode_about2">
            {logined ? (
              <button id="coctail_current_states" onClick={clickLogout}>
                로그아웃
              </button>
            ) : (
              <Link to="/auth">
                <button id="coctail_current_states">로그인</button>
              </Link>
            )}
          </div>
        </div>
        {logined ? (
          <Link to="/My_Page">
            <img id="User_Mode_profile" src="./main_img/User_Mode.png" />
          </Link>
        ) : (
          <img id="guest_Mode_profile" src="./main_img/Guest_Mode.png" />
        )}
      </div>

      <div className="Main_Top_Txt">다이어트 스마트하게 시작하다</div>
      <div id="main_test_button_img" onClick={ClickMenu5}>
        <img id="icon2" src="./main_img/icon2.png" alt="icon2"></img>
        <div>칼로리 분석표</div>
      </div>

      <div className="Menu_bar">
        <div
          onMouseOver={() => setIsImg1("1")}
          onMouseOut={() => setIsImg1("0")}
          onClick={ClickMenu1}
        >
          {isImg_click1 === "1" ? (
            <img
              id="menu_items2"
              src="./main_img/menu_item1_click.png"
              alt="item1"
            ></img>
          ) : isImg1 === "0" ? (
            <img
              id="menu_items2"
              src="./main_img/menu_item1.png"
              alt="item1"
            ></img>
          ) : (
            <img
              id="menu_items2"
              src="./main_img/menu_item_mouse_hover1.png"
              alt="item1"
            ></img>
          )}
        </div>
        <div
          onMouseOver={() => setIsImg2("1")}
          onMouseOut={() => setIsImg2("0")}
          onClick={ClickMenu2}
        >
          {isImg_click2 === "1" ? (
            <img
              id="menu_items2"
              src="./main_img/menu_item2_click.png"
              alt="item2"
            ></img>
          ) : isImg2 === "0" ? (
            <img
              id="menu_items2"
              src="./main_img/menu_item2.png"
              alt="item2"
            ></img>
          ) : (
            <img
              id="menu_items2"
              src="./main_img/menu_item_mouse_hover2.png"
              alt="item2"
            ></img>
          )}
        </div>
        <div
          onMouseOver={() => setIsImg3("1")}
          onMouseOut={() => setIsImg3("0")}
          onClick={ClickMenu3}
        >
          {isImg_click3 === "1" ? (
            <img
              id="menu_items2"
              src="./main_img/menu_item3_click.png"
              alt="item3"
            ></img>
          ) : isImg3 === "0" ? (
            <img
              id="menu_items2"
              src="./main_img/menu_item3.png"
              alt="item3"
            ></img>
          ) : (
            <img
              id="menu_items2"
              src="./main_img/menu_item_mouse_hover3.png"
              alt="item3"
            ></img>
          )}
        </div>
        <div
          onMouseOver={() => setIsImg4("1")}
          onMouseOut={() => setIsImg4("0")}
          onClick={ClickMenu4}
        >
          {isImg_click4 === "1" ? (
            <img
              id="menu_items2"
              src="./main_img/menu_item4_click.png"
              alt="item4"
            ></img>
          ) : isImg4 === "0" ? (
            <img
              id="menu_items2"
              src="./main_img/menu_item4.png"
              alt="item4"
            ></img>
          ) : (
            <img
              id="menu_items2"
              src="./main_img/menu_item_mouse_hover4.png"
              alt="item4"
            ></img>
          )}
        </div>
      </div>

      {isImg_click1 === "0" &&
      isImg_click2 === "0" &&
      isImg_click3 === "0" &&
      isImg_click4 === "0" &&
      isImg_click5 === "0" ? (
        <Basic_page />
      ) : null}
      {isImg_click1 === "1" ? <Gamja /> : null}
      {isImg_click2 === "1" ? <CC_introduce /> : null}
      {isImg_click3 === "1" ? <List /> : null}
      {isImg_click4 === "1" ? <Introduce_App /> : null}
      {isImg_click5 === "1" ? <User_Calorie /> : null}
    </div>
  )
}
