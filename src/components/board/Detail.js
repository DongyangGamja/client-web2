import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Main from "../main/Main"
import Banner2 from "../main/Banner/Banner2"
import { axiosC } from "../../axios"
/**
 * URL : /board/:id
 * 게시글 상세 페이지
 *  */

export default function Detail() {
  // 데이터 처리 여부(Loading)과 데이터 State 관리
  const [loading, setLoading] = useState(true) //Loading은 데이터를 받아오지 못 한 상태는 True, 따라서 초기 값 True
  const [board, setBoard] = useState()

  const { id } = useParams() //현재 경로의 파라메터 값 추출 ex) if /board/3 -> id = 3, 즉 board/:id에서 (:id)부분 추출

  //해당 컴포넌트가 화면에 비춰질 때 실행 -> axiosC와 ID 값(+ Get)을 이용한 게시글 데이터 요청
  const getBoard = () => {
    axiosC.get(`http://3.39.32.181:8001/api/board/${id}`).then((res) => {
      //성공시 Data는 [{}] 이렇게 오기에, res.data.board[0]을 board에 저장하여 배열 없애고 값만 저장
      setBoard(res.data.board[0])
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
     <Main/>
     <Banner2/>
      <div className="board_detail">
        <div className="small_box">
          {loading ? null : (
            <div className="map_box">
              <h1>{board.b_title}</h1>
              <h2 className="name">@ {board.u_name}</h2>
              <div className="detail_box">
                <h2 className="detail">{board.b_detail}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
