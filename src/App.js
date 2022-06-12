import { Route, Routes } from "react-router-dom"
import Register from "./components/auth/Register"
import Detail from "./components/board/Detail"
import New from "./components/board/New"
import Profile from "./components/profile"
import "./App.scss"
import Home from "./components/home/Home"
import Login from "./components/auth/Login"
import Auth from "./components/auth/Auth"
import List from "./components/board/List"
import NewGamja from "./components/auth/NewGamja"
// import Search from "./components/board/Search"
function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/board/search" element={<Search />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/gamja" element={<NewGamja />} />
        <Route path="/board/:id" element={<Detail />} />
        <Route path="/board/new" element={<New />} />
        <Route path="/board" element={<List />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
