import { useEffect, useState } from "react"
import { axiosC } from "../../axios"

/**
 * URL : /profile
 * 칼로리 정보 컴포넌트
 *  */

export default function Menu() {
  // data(칼로리 정보, 배열), loading State 관리
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // 계정 정보(id) 추출하여 id에 저장
  const id = localStorage.getItem("loginId")

  useEffect(() => {
    axiosC.get(`http://3.39.32.181:8001/api/kcal/${id}`).then((res) => {
      setData(res.data.data) //data 저장
      setLoading(false) // Loading End
    })
  }, [])
  // 음식 종류 number to String
  const menuName = (m) => {
    switch (m) {
      case 1:
        return "사과"
      case 2:
        return "바나나"
      case 3:
        return "당근"
    }
  }

  return (
    <div className="menu">
      <h1>Kcal List</h1>
      {loading ? null : (
        <ul>
          {data.map((item) => (
            <li key={item.m_id}>
              {menuName(item.m_kind)}, {item.m_kcal} Kcal 섭취
              {item.m_date}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
