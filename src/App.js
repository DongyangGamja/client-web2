import Main from "./components/main/Main2";
import Detail from "./components/board/Detail";
import New from "./components/board/New"
import Board from "./components/board"
import { useEffect, useState } from "react"
import Home from "./components/home/index"
import Auth from "./components/auth";
import Sign_in from "./components/auth/Sign_in";
import Sign_up from "./components/auth/Sign_up";
import New_gamja from "./components/auth/New_gamja";
import List from "./components/board/index";
import My_Page from "./components/auth/My_Page";
import Rename_Gamja from "./components/auth/My_Page/Rename_Gamja";
import Reset_Pw from "./components/auth/My_Page/Reset_Pw";

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
      <Route path="/board/:id" element={<Detail />} />
      <Route path="/" element={<Home/>} />
      <Route path="/board/:id" element={<Detail />} />
      <Route path="/board/new" element={<New />} />
      <Route path="/board" element={<Board />} /> 
      <Route path="/auth" element={<Auth />} />
      <Route path="/sign_in" element={<Sign_in/>} />
      <Route path="/sign_up" element={<Sign_up/>} />
      <Route path="/New_gamja" element={<New_gamja/>} />
      <Route path="/My_Page" element={<My_Page/>} />      
      <Route path="/Rename" element={<Rename_Gamja/>} />      
      <Route path="/Reset_Pw" element={<Reset_Pw/>} />      
    </Routes>
  )
}

export default App
//JXS
//javascript 안에 html tag를

//Babel >>최신 문법을 옛날 걸로 바꿈 -버전호환성을 위해
