import Head from "../home/Head"
import Gamja from "./Gamja"
import Info from "./Info"
import Menu from "./Menu"
import MyBoard from "./MyBoard"
/**
 * URL : /profile
 * 사용자의 정보 제공 페이지
 *  */
export default function Profile() {
  return (
    <div className="profile">
      <Head />
      <div className="profile_box">
        {/* 감자 정보 */}
        <Gamja />
        {/* 사용자 정보(계정) */}
        <Info />
        {/* 사용자 게시글 정보 */}
        <MyBoard />
        {/* 사용자 칼로리 정보 */}
        <Menu />
      </div>
    </div>
  )
}
