import { useEffect, useState } from "react"
import { axiosC } from "../../axios"
import "./User_Calorie.scss"
import Bottom from "../main/Bottom"
import { Routes, Route, Link } from "react-router-dom"

function User_Calorie() {
  const [loading, setLoading] = useState(true)
  const [logined, setLogined] = useState(false)
  const [gender, setgender] = useState("")
  const [move, setmove] = useState("")
  const [height, setheight] = useState("")
  const [weight,setweight] = useState("")
  const [Calorie, setCalorie] = useState("")
  const [user_data, setuser_data] = useState("")

  useEffect(() => {
    get_userinfo()
  }, [])

  useEffect(() => {
    get_User_Calorie()
  }, [])

  // useEffect -> axios를 활용한 게시글 데이터 요청
  const get_userinfo = () => {
    axiosC
      .get("http://210.90.136.10:3030/api/userinfo", {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res.data.goalKcal)
        setuser_data(res.data.goalKcal) //시간 순서대로 정렬을 위한 reverse, 역순으로 보내지더라..
        setLoading(false) // Loading 종료
      })
  }

  //사용자 정보 저장 axios
  const post_user_data = () => {
    if (gender != "" && move != "" && height != "" && weight !="") {
      axiosC({
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
        url: "http://210.90.136.10:3030/api/userinfo",
        method: "post",
        data: {
          gender: gender,
          weight: weight,
          height: height,
          move: move,
        },
      }).then((res) => {
        if (res.data) {
          window.alert("사용자 정보 저장완료")
        } else {
          window.alert("정보저장 실패, 다시 시도해보세요.")
        }
      })
    } else {
      window.alert("정확한 정보를 입력해주세요.")
    }
  }

  //사용자가 인식한 칼로리 데이터 가져오기
  const get_User_Calorie = () => {
    axiosC
      .get("http://210.90.136.10:3030/api/recode/1", {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setCalorie(res.data.filter(find_calorie)[0])
        console.log(res.data.filter(find_calorie)[0])
      })
  }

  function find_calorie(element)  {
    if(element.idx === 23)  {
      return true;
    }
  }

  //성별(남, 여)
  const genderclick = (e) => {
    if (e.target.value === "1") {
      setgender(true)
      console.log(gender)
    } else if (e.target.value === "2") {
      setgender(false)
      console.log(gender)
    }
  }
  //운동량 (상, 중, 하)
  const moveclick = (e) => {
    if (e.target.value === "0") {
      setmove(0)
      console.log(move)
    } else if (e.target.value === "1") {
      setmove(1)
      console.log(move)
    } else if (e.target.value === "2") {
      setmove(2)
      console.log(move)
    }
  }

  useEffect(() => {
    localStorage.getItem("accessToken") ? setLogined(true) : setLogined(false)
  }, logined)

  return (
    <div>
      <div className="User_calorie_container">
        <div className="User_calorie_Content">
          <div id="User_calorie_top_txt">칼로리 분석표</div>
          <div>
            {user_data === "" ? (
              <div className="User_calorie_rowflex_box">
                <div className="User_calorie_container2">
                  <p>성별</p>
                  <div className="User_info_input_box">
                    <button
                      value="1"
                      onClick={genderclick}
                      style={{ color: gender === true ? "black" : "#8A8A8A" }}
                    >
                      남자
                    </button>{" "}
                    <button
                      value="2"
                      onClick={genderclick}
                      style={{ color: gender === false ? "black" : "#8A8A8A" }}
                    >
                      여자
                    </button>
                  </div>
                  <p>신장</p>
                  <div className="User_info_input_box">
                    <input
                      type="number"
                      onChange={(e) => setheight(e.target.value)}
                      max="200"
                    ></input>
                    (cm)
                  </div>
                  <p>몸무게</p>
                  <div className="User_info_input_box">
                    <input
                      type="number"
                      onChange={(e) => setweight(e.target.value)}
                      max="200"
                    ></input>
                    (kg)
                  </div>
                  <p>활동지수</p>
                  <div className="User_info_input_box">
                    <button
                      onClick={moveclick}
                      value="0"
                      style={{ color: move === 0 ? "black" : "#8A8A8A" }}
                    >
                      상
                    </button>
                    <button
                      onClick={moveclick}
                      value="1"
                      style={{ color: move === 1 ? "black" : "#8A8A8A" }}
                    >
                      중
                    </button>
                    <button
                      onClick={moveclick}
                      value="2"
                      style={{ color: move === 2 ? "black" : "#8A8A8A" }}
                    >
                      하
                    </button>
                  </div>
                  <button id="post_user_info" onClick={post_user_data}>
                    저장
                  </button>
                </div>
                <img
                  src="./user_calorie/guide.png"
                  id="calorie_guide"
                  alt="calorie_guide"
                ></img>
              </div>
            ) : (
              <div className="User_calorie_container2">
                  <div id="current_calorie">현재칼로리/<a>목표칼로리</a></div>
                    <br></br>
                  {Calorie.kcal} / {user_data} Kcal ({Math.round((Calorie.kcal/user_data)*100)}%)
              </div>
            )}
          </div>
        </div>
        <Bottom />
      </div>
    </div>
  )
}

export default User_Calorie
