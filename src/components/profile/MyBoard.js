import { axiosC } from "../../axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

/**
 * URL : /profile
 * 칼로리 정보 컴포넌트
 *  */
export default function MyBoard() {
  // data(게시글), loading State 관리
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // 계정 정보(ID)를 변수 id에 저장
  const id = localStorage.getItem("loginId")

  useEffect(() => {
    axiosC.get(`http://3.39.32.181:8001/api/board/user/${id}`).then((res) => {
      setData(res.data.data) // Data 설정
      setLoading(false) // Loading End
    })
  }, [])

  return (
    <div className="myboard">
      <h1>Board List</h1>
      <ol>
        {loading
          ? null
          : data.map((item) => (
              <Link to={`/board/${item.b_id}`}>
                <li key={item.b}>{item.b_title}</li>
              </Link>
            ))}
      </ol>
    </div>
  )
}
