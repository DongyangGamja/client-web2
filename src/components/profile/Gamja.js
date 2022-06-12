import { useEffect, useState } from "react"
import gamja from "./../public/potato5.png"
import { axiosC } from "../../axios"
/**s
 * URL : /profile
 * 감자 정보 컴포넌트
 *  */

export default function Gamja() {
  // data(감자정보), loading State 관리
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  // 계정 정보(ID)를 변수 id에 저장
  const id = localStorage.getItem("loginId")

  useEffect(() => {
    axiosC.get(`http://3.39.32.181:8001/api/gamja/${id}`).then((res) => {
      setData(res.data.data[0]) //감자 정보 저장
      setLoading(false) //Loading End
    })
  }, [])
  return (
    <div className="gamja">
      <img src={gamja} />
      {loading ? null : <h2>LV.1 {data.g_name}</h2>}
    </div>
  )
}
