import { Link } from "react-router-dom"
import logo from "./../public/logo_.jpg"
/**
 * URL : /auth
 * 로그인, 회원 가입 선택
 *  */
export default function Auth() {
  return (
    <div className="auth_box">
      <div className="left_box">
        <img src={logo} />
      </div>
      <div className="right_box">
        <h1>Gamja Community</h1>
        <h3>SNS 계정으로 Gamja에 참여하세요!</h3>

        <button id="google_btn">Google 계정으로 로그인</button>
        <br />
        <button id="kakao_btn">Kakao 계정으로 로그인</button>
        <br />
        <Link to={"/auth/login"}>
          <button id="gamja_btn">Gamja 계정으로 로그인</button>
        </Link>
        <h3>
          계정이 없으신가요?? <Link to={"/auth/register"}>회원가입</Link>
        </h3>
      </div>
    </div>
  )
}
