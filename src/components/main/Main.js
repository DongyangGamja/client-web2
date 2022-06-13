import { useEffect, useState } from "react"
import "./Main.scss"
import Banner1 from "./Banner/Banner1"
import Banner2 from "./Banner/Banner2"
import{Link} from "react-router-dom";
import { axiosC } from "../../axios";
import { useMediaQuery } from "react-responsive"



export default function Main(){
 
    const [isImg, setIsImg]=useState("0");
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
    
 
return(
    <div className="main_container">  
        <div>
            <div className="menu_bar">
                <Link to="/"><div className="GAMJA"><h1>GAMJA</h1></div></Link>
                <span>
                    <Link to="/">
                    <button id="Menu_btn"
                    ><b>Home</b></button></Link>
                    <button id="Menu_btn"><b>About</b></button>
                    <Link to="/board">
                    <button id="Menu_btn"
                    ><b>Community</b></button></Link>
                    <button id="Menu_btn"><b>Cs</b></button>
                    {logined ?  (<button id="Menu_btn" onClick={clickLogout}><b>Logout</b></button>)
                    : (<Link to={"/auth"}><button id="Menu_btn"><b>Login</b></button></Link>) }
                    
                </span>
                <button id="Mypage"
                 onMouseOver={()=> setIsImg("1")} 
                 onMouseOut={()=> setIsImg("0")}>
                     {isImg ==="1" ? 
                    <Link to ={"/auth"}><img src="../../../img/Mypage2.png" width="100%" ></img></Link>
                     :  <Link to ={"/auth"}><img src="../../../img/Mypage.png" width="100%" ></img></Link>}   
                </button>
            </div>
            
        </div>
    </div>//배경
)



    
}   
