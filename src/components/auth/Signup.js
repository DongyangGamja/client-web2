
import axios from "axios"
import { useEffect, useState } from "react"
import "./Sign.scss"
import{Link} from "react-router-dom";
import { useMediaQuery } from "react-responsive"
import LoginBackground from "./LoginBakground";
import Login_side from "./Login_side";
import { axiosC } from "../../axios"

<link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>



export default function Signup2(){

   
    //우측 이미지 변경
 const [isImg, setIsImg]=useState("0");
    


//Id, Pw
let [inputId, setInputId] = useState()
let [inputPw, setInputPw] = useState()
let [inputPwc, setInputPwc] = useState("")
let [inputName, setInputName] = useState()


 // handler 함수들
 const onEmailHandler = (event) => {
  setInputId(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setInputName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setInputPw(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setInputPwc(event.currentTarget.value);
  };



  //axios를 통한 회원가입 요청
  const reqRegister = () => {
    if(inputId ==="" || inputPw ==="" || inputName==="" || inputPwc =="" ){
      window.alert("정확한 정보를 입력해주세요")
    }{
    inputPw === inputPwc //PW, PWC가 같음(회원가입 진행)
      ? axiosC({
          url :  "http://3.39.32.181:8001/api/auth/register",
          method: "post",
          data: {
            id: inputId,
            pw: inputPw,
            name: inputName,
          },
        })
          .then((res) => {
            if (res.data.result) {
              localStorage.setItem("i", inputId) //임시 계정정보(ID) 저장
              window.alert("회원가입 성공!")
              window.location.replace("/auth/gamja")//감자 생성 페이지 이동
            } else {
              window.alert("ERR : ID가 중복되었습니다.")//회원 가입 실패
            }
          })
          .catch((err) => console.log(err))
      : window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
  }}
  

return(
       
  <div>
  <LoginBackground/>
  <div className="content_container">
  <div className="login_container">
          
          <div id="Login_main">
          <div id="Logo">
              <img src="../../../img/LOGO.png" width="50px"></img>
              <Link to ="/"><h1 id="Logo_name">GAMJA</h1></Link>    
          </div>
              <div className="table_container" align="center" >
                  <div className="Signup_text"><b><p>Sign up</p></b></div>
                  <label><div><input id="Signcontent" type="text" placeholder="Email" onChange={onEmailHandler} required></input></div></label>
                  <div><input id="Signcontent" type="text" placeholder="NickName"  onChange={onNameHandler} required></input></div>
                  <div><input id="Signcontent" type="password" placeholder="PassWord" onChange={onPasswordHandler} required></input></div>
                  <div><input id="Signcontent" type="password" placeholder="PassWord Agin" onChange={onConfirmPasswordHandler} required></input></div>
                  <div id="PwCheck">
                    {inputPwc=== "" ? null :
                      (inputPw === inputPwc ? <img src="https://cdn-icons-png.flaticon.com/512/6276/6276686.png" alt="비밀번호 일치." width="40px"></img> :
                    <img src="https://cdn-icons-png.flaticon.com/512/6467/6467134.png" alt="비밀번호 일치하지 않습니다.." width="37px"></img>)}</div> 
                  <div><button id="Sign_btn" onClick={reqRegister}>Sign up</button></div>       
              </div>
           </div>

     

          </div>


          <div className="sub_container">
          
              {isImg ==="0" ? <img src="../../../img/img1.png" alt="picture" width="720px"></img> : null}
              {isImg ==="1" ? <img src="../../../img/img2.png" alt="picture" width="720px"></img>: null}
              {isImg ==="2" ? <img src="../../../img/img3.png" alt="picture" width="720px"></img>: null}
              <div className="list_view">
                  <button id="list_img" value="0" onMouseOver={(e)=> setIsImg(e.target.value)}></button>
                  <button id="list_img" value="1" onMouseOver={(e)=> setIsImg(e.target.value)}></button>
                  <button id="list_img" value="2" onMouseOver={(e)=> setIsImg(e.target.value)}></button>
              </div>
          </div>
      </div>
      </div>

    

   

    );

  /* <div><Background/>
    <div id="Signup_container1">
   <Link to ="/User"><div className="Join_text"><p><b>JOIN GAMJA</b></p></div ></Link> 
    <div>
        <div><input id="IdPw" type="text" placeholder="Email" onChange={onEmailHandler} required></input></div>
        <div><input id="IdPw" type="text" placeholder="NickName"  onChange={onNameHandler} required></input></div>
        <div><input id="IdPw" type="password" placeholder="PassWord" onChange={onPasswordHandler} required></input></div>
        <div><input id="IdPw" type="password" placeholder="PassWord Agin" onChange={onConfirmPasswordHandler} required></input></div>
        <div id="PwCheck">{ConfirmPassword === "" ? null :
         (ConfirmPassword === Password ? <img src="https://cdn-icons-png.flaticon.com/512/6276/6276686.png" alt="비밀번호 일치." width="40px"></img>:
          <img src="https://cdn-icons-png.flaticon.com/512/6467/6467134.png" alt="비밀번호 일치하지 않습니다.." width="37px"></img>)}</div> 
        <div><button id="Sign_btn" onClick={reqRegister}>Sign up</button></div>       
    </div>
   
</div>

</div>*/
};

