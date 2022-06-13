import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Main from "./Main"
import Banner1 from "./Banner/Banner1"
import Banner2 from "./Banner/Banner2"

export default function Main() {
  const [logined, setLogined] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    token ? setLogined(true) : setLogined(false)
  }, [])

  return (
    <div>
      {logined ? (
        window.location.replace("/")
      ) : (
        <div>
          <Main/>
        </div>
      )}
    </div>
  )
}
