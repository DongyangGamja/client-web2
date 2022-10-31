import { useParams } from "react-router-dom"
import { useState, useEffect, useCallback } from "react"
import { axiosC } from "../../axios"
import "./Detail.scss"
import Bottom from "../main/Bottom"
import styled from "styled-components";
import List2 from "./List2";

/**
 * URL : /board/:id
 * 게시글 상세 페이지
 *  */

export default function Detail({Num}) {

 
  
   // 데이터 처리 여부(Loading)과 데이터 State 관리
   const [loading, setLoading] = useState(true) //Loading은 데이터를 받아오지 못 한 상태는 True, 따라서 초기 값 True
   const [board, setBoard] = useState("")
   const [CurrentPage, setCurrentPage] =useState("")
   const [Updateboard, setUpdateborad] =useState(false)
   const [Title, setTitle] =useState("")
   const [Content, setContent] =useState("")


   const onChangeTitle= (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent= (e) => {
    setContent(e.target.value);
  };
  


   
  //리스트로 돌아가기
   function Go_List(){
    setCurrentPage("List")
  }


  //업데이트 상태로
  function Update_able(){
    if(localStorage.getItem("loginId")===board.user.email){
      setUpdateborad(Updateboard => !Updateboard)

      console.log(Updateboard)
      setTitle(board.findBoard.title)
      setContent(board.findBoard.text)
    } else{
      window.alert("수정권한이 없습니다.")
    }
  }

  //게시글 삭제
  const Delete = () =>{
    if(localStorage.getItem("loginId")===board.user.email){
      if(confirm("정말로 삭제하시겠습니까?")==true){
        console.log("삭제완료")
        axiosC.delete(`http://210.90.136.10:3030/api/board/${Num}`).then((res) => {
          window.alert("삭제가 완료되었습니다.")
          setUpdateborad(false)
          setCurrentPage("List")
        })
      }else{
        console.log("취소되었습니다.")
      }
    
    }else{
      window.alert("삭제권한이 없습니다.")
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
          setCurrentPage("List")
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
    <div className="Detail_container">
    <div className="Detail_Content" >
      <div id="detail_top_txt">커뮤니티</div>
      <div className="detail_main_container">
      {loading ? null : (
            <div>
              <div className="detail_information_box">
                {Updateboard ===false ?
                <div id="detail_title">제목 : {board.findBoard.title}</div> :
                <div id="detail_title">제목 : <input type="text" value={Title} onChange={onChangeTitle}></input></div>
                }
                <div id="detail_date">작성일자 : {board.findBoard.createdAt.substr(0, 10)}</div> 
                
              </div>
              <div className="detail_information_box">
                <div id="detail_name">작성자 : {board.user.name}</div>
               
                <img id="detail_item2" src="./board/back.png" onClick={Go_List}></img> <img id="detail_item" src="./board/retouch.png" onClick={Update_able}></img> <img id="detail_item" src="./board/delete.png" onClick={Delete}></img> 
                
              </div>
              {Updateboard ===false ?
              <div id="detail_user_content">내용 : {board.findBoard.text}</div>
              :<textarea id="detail_user_content_update" value={Content} onChange={onChangeContent}></textarea>}
            <div>
            {Updateboard ===false ? null :<button id="update_btn" onClick={Update}>수정완료</button> }

            </div>
            </div>
          )}

      </div>
    </div>
    <Bottom/>
</div>
: CurrentPage ==="List" ? <List2/> : null}

</div>

  )
}
