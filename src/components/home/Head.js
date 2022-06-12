import logo from "./../public/logo_.jpg"
import { Link } from "react-router-dom"
import { axiosC } from "../../axios"
import { useEffect, useState } from "react"
/**
 * URL : *
 * Head 상단 고정 Component
 *  */

export default function Head() {
  const [logined, setLogined] = useState(false)

  useEffect(() => {
    localStorage.getItem("accessToken") ? setLogined(true) : setLogined(false)
  }, [logined])
  // Profile 클릭 시, JWT 검증 후 페이지 이동
  const getJwtCheck = () => {
    // JWT 여부에 따른 분기 처리
    if (localStorage.getItem("accessToken")) {
      axiosC.get("http://3.39.32.181:8001/jwt").then((res) => {
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
    // 메인 창으로 재이동
    window.location.replace("/")
  }
  // 로그인 여부에 따른 분기 처리
  return (
    <div className="head">
      <div className="head_logo">
        <img src={logo} />
        <h3>Gamja Community</h3>
      </div>
      <div className="head_nav">
        <Link to={"/"}>
          <li>HOME</li>
        </Link>
        <Link to={"/board"}>
          <li>Content</li>
        </Link>
        <li onClick={getJwtCheck}>Profile</li>
        {logined ? (
          <li onClick={clickLogout}>Logout</li>
        ) : (
          <Link to={"/auth"}>
            <li>LOGIN</li>
          </Link>
        )}
        {logined ? (
          <li>{localStorage.getItem("loginName")}님</li>
        ) : (
          <li>게스트</li>
        )}
      </div>
    </div>
  )
}
