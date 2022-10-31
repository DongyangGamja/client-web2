import { useEffect, useState } from "react"
import { axiosC } from "../../axios"
import "./List2.scss";
import Bottom from "../main/Bottom";
import New from "./New";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Detail from "./Detail";

 
function List2() {


  // 검색 여부와 Loading, Boards(요청한 게시글 데이터), data(검색 값) State 관리
 const [loading, setLoading] = useState(true)
 const [boards, setBoards] = useState([])
 const [logined, setLogined] = useState(false)

 const [CurrentPage, setCurrentPage] =useState("")
 const [ListNum, setListNum] = useState("")





 useEffect(() => {
   localStorage.getItem("accessToken") ? setLogined(true) : setLogined(false)
 }, [logined])

 

 // 게시글 생성 버튼
 const New_board = () => {
   // JWT 보유 여부로 분기 처리
   if (localStorage.getItem("accessToken")) {
    setCurrentPage("New_board")
   }else {
     window.alert("로그인 하세요!")
     window.location.replace("/auth") // 로그인 페이지 이동
   }
 }

 

 // useEffect -> axios를 활용한 게시글 데이터 요청
 const getBoard = () => {
   axiosC({
     method: "get",
     url: "http://210.90.136.10:3030/api/board",
   }).then((res) => {
    console.log(res)
     setBoards(res.data.reverse()) //시간 순서대로 정렬을 위한 reverse, 역순으로 보내지더라..
     setLoading(false) // Loading 종료
   })
 }

 // useEffect를 이용한 최초 혹은 컴포넌트 변화 시 getboard() 실행
 useEffect(() => {
   getBoard()
 }, [])


  useEffect(() => {
    localStorage.getItem("accessToken") ? setLogined(true) : setLogined(false)
  }, logined)
 
  return (
    <div>
      {loading ? null :
    (CurrentPage ===""  && ListNum ==="" ? 
    <div className="List_container">
        <div className="List_Content" >
          <div id="List_top_txt">커뮤니케이션</div>
          <div className="make_new_board_container">
            <label onClick={New_board}>
            <div id="List_write">게시물 작성</div><img src="./board/write_btn.png" alt="write_btn"/>
            </label>
              <div id="board_list">
            {boards.map((item) => (
                  <div className="List_box" onClick={()=>setListNum(item.idx)} >
                  <div className="block_list">{item.title}</div>
                    <div className="List_box2">
                        <div>작성일자 : {item.createdAt.substr(0, 10)}</div>
                        <div>작성자 : {item.boardUser.name}</div>
                    </div>
                  </div>
            ))}
          </div>
          </div>
        </div>
        <Bottom/>
    </div> 
    : CurrentPage ==="New_board" ? <New/> : ListNum != "" ? <Detail Num={ListNum}/>: null)
  }
    </div>
    
    
  )
}

export default List2