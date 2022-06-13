import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { axiosC } from "../../axios"
import "./board.scss"

/**
 * URL : /board
 * 검색창과, 게시물 리스트
 *  */

 export default function List(props) {
  // 검색 여부와 Loading, Boards(요청한 게시글 데이터), data(검색 값) State 관리
  const [loading, setLoading] = useState(true)
  const [boards, setBoards] = useState([])
  const [data, setData] = useState()
  const [logined, setLogined] = useState(false)

  useEffect(() => {
    localStorage.getItem("accessToken") ? setLogined(true) : setLogined(false)
  }, [logined])

  

  // 게시글 생성 버튼
  const getJwtCheck = () => {
    // JWT 보유 여부로 분기 처리
    if (localStorage.getItem("accessToken")) {
      // JWT를 보유하면 axiosC를 이용한 로그인 인증 진행
      axiosC.get("http://3.39.32.181:8001/jwt").then((res) => {
        // 서버에서 로그인 여부에 따른 분기처리
        // 로그인 X
        if (!res.data.result) {
          window.alert("로그인 하세요!")
          window.location.replace("/auth") // 로그인 페이지 이동
          // 로그인 O
        } else {
          window.location.replace("/board/new") // 게시글 생성 페이지 이동
        }
      })
      // JWT를 보유 X
    } else {
      window.alert("로그인 하세요!")
      window.location.replace("/auth") // 로그인 페이지 이동
    }
  }

  // useEffect -> axios를 활용한 게시글 데이터 요청
  const getBoard = () => {
    axiosC({
      method: "get",
      url: "http://3.39.32.181:8001/api/board",
    }).then((res) => {
      setBoards(res.data.boards.reverse()) //시간 순서대로 정렬을 위한 reverse, 역순으로 보내지더라..
      setLoading(false) // Loading 종료
    })
  }

  // useEffect를 이용한 최초 혹은 컴포넌트 변화 시 getboard() 실행
  useEffect(() => {
    getBoard()
  }, [])

  return (

     <div id="Coummnity_container">
     <div id="contain_left">
     {logined ? (
       <div id="userinfo">
         <img  id="profile" src="../../../img/profile.png"></img>
         <div id="userinfo2">
         <div>{localStorage.getItem("loginName")}님</div>
        Lv : 1
        </div>
       </div>) : null
 }
       
       <div id="Lookup_container">
         
         <div id="linediv"> <span id="Mylist"><b>나의 활동</b></span><span id="report" onClick={getJwtCheck}><b>게시글 작성</b></span></div>
          <div id="linediv"><input id="search" type="text" placeholder=" Search.."></input><img id="search_img" src="../../../img/search_img.png"></img></div>
          <div id="linediv2"><span id="recipe_post"  align="center"><b>레시피 게시글</b></span></div>
          <div id="linediv"><div></div><input id="checklist" type="checkbox"></input><b>레시피 공유</b></div>
          <div id="linediv"><input id="checklist" type="checkbox"></input><b>레시피 추천</b></div>
         <br></br>
          <div id="linediv2"><span id="recipe_post"  align="center"><b>감자 이야기</b></span></div>
          <div id="linediv"><div></div><input id="checklist" type="checkbox"></input><b>감자 공략글</b></div>
          <div id="linediv"><input id="checklist" type="checkbox"></input><b>감자 랭킹</b></div>
          <br></br>
          <div id="linediv2"><span id="recipe_post"  align="center"><b>자유 게시판 </b></span></div>
       </div>
      </div>
     <div id="contain_center">
      <div id="linediv"><img id="alret" src="../../../img/alret.png"></img><h2>공지사항</h2></div>
      <div id="alrettext"><b>세상을 건강하게 만드는 감자입니다.</b></div>

      <div id="Top5_post_container">
      <div id="post_title"><b>인기 게시글<span id="Top5_text"> Top5</span></b></div>
      <div> <div id="board_list">
            {boards.map((item) => (
              <Link to={`/board/${item.b_id}`} key={item.b_id} style={{color:'black'}}>
                  <li id="block_list">{item.b_title}</li>
              </Link>
            ))}
          </div> </div>

      </div>

      <div id="post_container">
      <div id="post_title"><b>회원 게시글</b></div>
      <div> <div id="board_list">
            {boards.map((item) => (
              <Link to ={`/board/${item.b_id}` } key={item.b_id} style={{color:'black' }}>
                  <li id="block_list" style={{}}>{item.b_title}</li>
              </Link>
            ))}
          </div> </div>

      </div>

      
      
      </div>


    
     <div id="contain_right">
       </div>     
    
    
    </div>
   
    
  )
}

/* 삭제 절대 XXXXXXXX */
// export default function List(props) {
//   // 검색 여부와 Loading, Boards(요청한 게시글 데이터), data(검색 값) State 관리
//   const [searched, setSearched] = useState(false)
//   const [loading, setLoading] = useState(true)
//   const [boards, setBoards] = useState([])
//   const [data, setData] = useState()

//   // 게시글 생성 버튼
//   const newBtn = () => {
//     // JWT 보유 여부로 분기 처리
//     if (localStorage.getItem("accessToken")) {
//       // JWT를 보유하면 axiosC를 이용한 로그인 인증 진행
//       axiosC.get("http://3.39.32.181:8001/jwt").then((res) => {
//         // 서버에서 로그인 여부에 따른 분기처리
//         // 로그인 X
//         if (!res.data.result) {
//           window.alert("로그인 하세요!")
//           window.location.replace("/auth") // 로그인 페이지 이동
//           // 로그인 O
//         } else {
//           window.location.replace("/board/new") // 게시글 생성 페이지 이동
//         }
//       })
//       // JWT를 보유 X
//     } else {
//       window.alert("로그인 하세요!")
//       window.location.replace("/auth") // 로그인 페이지 이동
//     }
//   }

//   // 검색창 구현, Enter Press
//   const press = (e) => {
//     // 입력창에
//     if (e.key === "Enter") {
//       if (data != null) {
//         setSearched(true)
//       } else {
//         setSearched(false)
//       }
//     } else {
//       setSearched(false)
//     }
//   }

//   useEffect(() => {
//     console.log(searched)
//     setLoading(true)
//     searched
//       ? axiosC({
//           url: "http://3.39.32.181:8001/api/board",
//           method: "post",
//           data: {
//             title: data,
//           },
//         }).then((res) => {
//           setBoards(res.data.boards.reverse())
//           setLoading(false)
//         })
//       : axiosC({
//           method: "get",
//           url: "http://3.39.32.181:8001/api/board",
//         }).then((res) => {
//           setBoards(res.data.boards.reverse())
//           setLoading(false)
//         })
//   }, [searched])

//   return (
//     <div>
//       <Head />
//       <div className="board_search">
//         <h1>게시글을 검색하세요.</h1>
//         <input
//           onKeyPress={press}
//           type="text"
//           onChange={(e) => setData(e.target.value)}
//         />
//         <br />
//         <button onClick={newBtn}>게시글 만들기</button>
//       </div>
//       <div className="board_list">
//         {boards.map((item) => (
//           <Link to={`/board/${item.b_id}`} key={item.b_id}>
//             <div className="block">
//               <h1>{item.b_title}</h1>
//               <h3>
//                 @ {item.u_name} #{item.b_date}
//               </h3>
//               <p>{item.b_detail}</p>
//             </div>
//             <br />
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }
