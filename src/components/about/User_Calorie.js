import { useEffect, useState } from "react"
import { axiosC } from "../../axios"
import "./User_Calorie.scss"
import Bottom from "../main/Bottom"
import { Routes, Route, Link } from "react-router-dom"

function User_Calorie() {
  const [logined, setLogined] = useState(false)
  const [Calorie, setCalorie] = useState("")

  const get_User_Calorie = () => {
    axiosC.get("http://210.90.136.10:3030/api/recode",{
      headers: {
        accesstoken: localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      console.log(res)
      setCalorie(res.data) //시간 순서대로 정렬을 위한 reverse, 역순으로 보내지더라..
    })
  }
  
  useEffect(() => {
    get_User_Calorie()
  }, [])
 
 
   useEffect(() => {
     localStorage.getItem("accessToken") ? setLogined(true) : setLogined(false)
   }, logined)
 
   
  return (
    <div className="User_calorie_container">
      <div className="User_calorie_Content">
        <div id="User_calorie_top_txt">칼로리 분석표</div>
        <div className="User_calorie_container">
        <div>{Calorie==""? "앱에서 사용자 정보를 등록해주세요" : Calorie}</div>
        </div>
      </div>
      <Bottom />
    </div>
  )
}

export default User_Calorie
