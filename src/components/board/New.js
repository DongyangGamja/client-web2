import axios from "axios"
import { useState } from "react"
import Bottom from "../main/Bottom"
import List2 from "./List2"
import { axiosC } from "../../axios"
import "./New.scss"

export default function New() {
  const [title, setTitle] = useState()
  const [detail, setDetail] = useState()
  
  const [CurrentPage, setCurrentPage] =useState("")


  const onClick = () => {

    if(title!=null && detail!= null){
    axiosC({
      headers: {
        accesstoken: localStorage.getItem("accessToken"),
      },
      url: "http://210.90.136.10:3030/api/board",
      method: "post",
      data: {
        title: title,
        text: detail,
      },
    }).then((res) => {
      if (res.data) {
        window.alert("게시글 생성 성공")
        setCurrentPage("List")
      } else {
        window.alert("게시글 생성 실패, 다시 시도해보세요.")
      
      }
    })
    }else{
      window.alert("제목 및 내용을 입력해주세요.")
    }
  }

  function Go_List(){
    setCurrentPage("List")
  }

  return (
    <div>
      {CurrentPage==="" ?
    <div className="New_board_container">
      <div className="New_board_Content">
        <div id="New_board_top_txt">게시글 작성</div>
        <div className="New_board_container2">
        <div id="new_board_title">
          <div>제목</div>
          <input type="text" onChange={(e) => setTitle(e.target.value)} maxLength="30" />
        </div>
        <div id="new_board_content2">
          <textarea
            onChange={(e) => setDetail(e.target.value)}
            placeholder="내용을 입력해주세요"
          />
        </div>
        <button id="new_board_cancle" onClick={Go_List}>취소</button>
        <button id="new_board_create"onClick={onClick}>생성</button>
        </div>
      </div>
      <Bottom />
      </div>
    : <List2/>}
    </div>
  )
}
