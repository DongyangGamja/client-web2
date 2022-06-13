import Main from "./components/main/Main";
import Signup from "./components/auth/Signup"
import Detail from "./components/board/Detail";
import New from "./components/board/New"
import Board from "./components/board"
import Auth from "./components/auth/Auth"
import Login from "./components/auth/Login_container";
import { useEffect, useState } from "react"
import Home from "./components/home/index"
import NewGamja from "./components/auth/NewGamja";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";





function App() {
  const [logined, setLogined] = useState(false)
  useEffect(() => {
    localStorage.getItem("accessToken") ? setLogined(true) : setLogined(false)
  }, logined)
 
  return (
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/board/:id" element={<Detail />} />
      <Route path="/board/new" element={<New />} />
       <Route path="/board" element={<Board />} />
      <Route path="/auth/register" element={<Signup/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path="/auth/login" element={<Login/>} />
      <Route path="/auth/gamja" element={<NewGamja/>} />
    </Routes>
  )
}

export default App
//JXS
//javascript 안에 html tag를

//Babel >>최신 문법을 옛날 걸로 바꿈 -버전호환성을 위해
