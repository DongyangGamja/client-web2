import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Gamja from "./Gamja_story"

export default function About() {
  const [logined, setLogined] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    token ? setLogined(true) : setLogined(false)
  }, [])

  return (
   
        <div>
          <Gamja/>
        </div>
  )
}
