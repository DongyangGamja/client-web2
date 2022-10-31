import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosC } from "../../../axios"
import "./User_Page.scss"
import My_List_Detail from "./My_List_Detail"

export default function User_Page() {
  const [loading, setLoading] = useState(true)
  const [boards, setBoards] = useState([])
  const [ListNum, setListNum] = useState("")


  // useEffect -> axios를 활용한 게시글 데이터 요청
  const getBoard = () => {
    axiosC
      .get("http://210.90.136.10:3030/api/board/user", {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setBoards(res.data.data) //시간 순서대로 정렬을 위한 reverse, 역순으로 보내지더라..
        setLoading(false) // Loading 종료
      })
  }


  

  // useEffect를 이용한 최초 혹은 컴포넌트 변화 시 함수실행
  useEffect(() => {
    getBoard()
  }, [])

 


  // Btn Click -> axiosC 이용한 감자 이름 저장

  return (
    <div>
      {ListNum ==="" ?
      (loading ? (
        "로딩중.."
      ) : (
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

                <div className="User_Page_content">
                  <h1>나의 감자</h1>
                  <img
                    id="User_Page_img1"
                    src="./img/GAMJA_join.png"
                    alt="User_Page_img"
                  />
                  <h3>{localStorage.getItem("gamja_name")}</h3>
                  <Link to="/Rename"><button id="User_Page_gamja_btn">이름 변경</button></Link>

                  <Link to ="/Reset_Pw" style={{ textDecoration: "none" }}><div id="User_change_pw">비밀번호 변경</div></Link>
                </div>

                <div className="User_List_container">
                  <h1>나의 게시글</h1>
                  {boards=="" ? <h2>작성된 게시글이 없습니다</h2>: 
                  
                  (boards.map((item) => (
                    <div
                      className="User_page_List_View_container"
                      onClick={() => setListNum(item.idx)}
                    >
                      <div className="User_page_List_View_content">
                        <div className="List_View_title">{item.title}</div>
                        <div className="List_View_date">작성일 : {item.createdAt.substr(0, 10)}</div>
                      </div>
                    </div>
                  )))}
                </div>
                <img
                  id="copy_right"
                  src="./sign_img/copyright_img.png"
                  alt="copy_right"
                />
              </div>
              <div id="Sign_right_box"></div>
            </div>
          </div>
        </div>
      )) : <My_List_Detail Num={ListNum}/> }
    </div>
  )
}
