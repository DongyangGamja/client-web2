import { axiosC } from "../../axios"
import { useState, useEffect } from "react"

/**
 * URL : /profile
 * 사용자 정보 컴포넌트
 *  */

export default function Info() {
  // data(사용자 정보), loading State 관리
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  // 계정 정보(id) 추출하여 id에 저장
  const id = localStorage.getItem("loginId")

  useEffect(() => {
    axiosC.get(`http://3.39.32.181:8001/api/auth/${id}`).then((res) => {
      setData(res.data.data[0]) // data 저장
      setLoading(false) // Loading End
    })
  }, [])
  return (
    <div className="info">
      {loading ? null : (
        <div>
          <h1>이름 : {data.u_name}</h1>
          <h3>ID : {data.u_id}</h3>
        </div>
      )}
    </div>
  )
}
