import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosC } from "../../../axios"
import "./User_Page.scss"
import User_Page from "./User_Page"

export default function User_list_Detail({Num}) {

  const [loading, setLoading] = useState(true)
  const [board, setBoard] = useState([])
  const [CurrentPage, setCurrentPage] = useState("")
  const [Updateboard, setUpdateborad] =useState(false)
  const [Title, setTitle] =useState("")
  const [Content, setContent] =useState("")


  const onChangeTitle= (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent= (e) => {
    setContent(e.target.value);
  };

  const Back_page = ()=>{
    setCurrentPage("My_profile")
  }

  

  //업데이트 상태로
  function Update_able(){

      setUpdateborad(Updateboard => !Updateboard)

      console.log(Updateboard)
      setTitle(board.findBoard.title)
      setContent(board.findBoard.text)
    } 

  //게시글 삭제
  const Delete = () =>{
      if(confirm("정말로 삭제하시겠습니까?")==true){
        console.log("삭제완료")
        axiosC.delete(`http://210.90.136.10:3030/api/board/${Num}`).then((res) => {
          window.alert("삭제가 완료되었습니다.")
          setUpdateborad(false)
          setCurrentPage("My_profile")
        })
      }else{
        console.log("취소되었습니다.")
      }
    }
  

  //게시글 업데이트
  const Update =() =>{
    if(confirm("정말로 수정하시겠습니까?")==true){
      axiosC({
        url: (`http://210.90.136.10:3030/api/board/${Num}`),
        method: "patch",
        data: {
          title: Title,
          text: Content,
        },
      }).then((res) => {
        if (res.data) {
          window.alert("게시글 수정완료")
          setCurrentPage("My_profile")
          console.log(CurrentPage)
        } else {
          window.alert("게시글 생성 실패, 다시 시도해보세요.")   
        }
      })
  }
}



  //해당 컴포넌트가 화면에 비춰질 때 실행 -> axiosC와 ID 값(+ Get)을 이용한 게시글 데이터 요청
  const getBoard = () => {
    axiosC.get(`http://210.90.136.10:3030/api/board/${Num}`).then((res) => {
      //성공시 Data는 [{}] 이렇게 오기에, res.data.board[0]을 board에 저장하여 배열 없애고 값만 저장
      setBoard(res.data)
      //Loading이 끝났기에 False로 변경, 정확히는 현재 상태 current(매개변수)를 받아서 반대로 만들고 반환, 즉 현재 True면 False로 반환
      setLoading((current) => !current)
    })
  }

  //useEffect를 이용하여, 상태에 변확가 있거나, 해당 컴포넌트가 화면에 비춰질 때 getBoard를 실행
  useEffect(() => {
    getBoard()
  }, [])





  return (
    <div>
      {CurrentPage ==="" ?
      (loading ? (
        "loading.."
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

                <div className="My_Page_content">
                  <h2>나의 감자</h2>
                  <img
                    id="my_Page_img"
                    src="./img/GAMJA_join.png"
                    alt="My_Page_img"
                  />
                  <button id="my_Page_gamja_btn">사용자 정보수정</button>
                </div>

                <div className="User_List_container">
                  <h1>나의 게시글</h1>
                  <img id="User_list_back_btn" src="./my_page/back_btn.png" alt="User_list_back_btn" onClick={Back_page}></img>
                  
            
                  {Updateboard ?
                  <div id="User_list_detail_title">제목 : <input type="text" value={Title} onChange={onChangeTitle}></input></div>:
                  <div id="User_list_detail_title">제목 : {board.findBoard.title}</div>}
                      
                  <div id="User_list_detail_date">작성일자 : {board.findBoard.createdAt.substr(0, 10)}</div>
                  
                
             
             
                 {Updateboard ?
                  <textarea id="User_list_detail_content" value={Content} onChange={onChangeContent}></textarea>
                  : <div id="User_list_detail_content">{board.findBoard.text}</div>}

                  <div className="List_Detail_button_cotainer">
                  {/* 수정버튼 누르면 버튼이 바뀌도록 */}
                    {Updateboard ? <button id="User_list_retouch" onClick={Update}>완료</button> :<button id="User_list_retouch" onClick={Update_able}>수정</button> }
                    {Updateboard ? <button id="User_list_delete" onClick={Update_able} >취소</button> :<button id="User_list_delete" onClick={Delete}>삭제</button>}  
                  </div> 
                  
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
      )) : CurrentPage==="My_profile" ? <User_Page/> : null}
    </div>
  )
}
