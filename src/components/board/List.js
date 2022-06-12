import { useEffect, useState } from "react"
import { axiosC } from "../../axios"
import { Link } from "react-router-dom"
import Head from "../home/Head"

/**
 * URL : /board
 * 검색창과, 게시물 리스트
 *  */

export default function List(props) {
  // 검색 여부와 Loading, Boards(요청한 게시글 데이터), data(검색 값) State 관리
  const [loading, setLoading] = useState(true)
  const [boards, setBoards] = useState([])
  const [data, setData] = useState()

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
    <div>
      <Head />
      {loading ? null : (
        <div>
          <div className="board_search">
            <h1>Gamja Community</h1>
            <br />
            <button onClick={getJwtCheck}>게시글 만들기</button>
          </div>
          <div className="board_list">
            {boards.map((item) => (
              <Link to={`/board/${item.b_id}`} key={item.b_id}>
                <div className="block">
                  <h1>{item.b_title}</h1>
                  <h3>
                    @ {item.u_name} #{item.b_date}
                  </h3>
                  <p>{item.b_detail}</p>
                </div>
                <br />
              </Link>
            ))}
          </div>
        </div>
      )}
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
