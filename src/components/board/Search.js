/* 삭제 XX */

// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import { axiosC } from "../../axios"

// export default function Search() {
//   const [loading, setLoading] = useState(true)
//   const [boards, setBoards] = useState([])
//   const [data, setData] = useState()

//   useEffect(() => {
//     axiosC({
//       url: "http://localhost:8001/api/board",
//       method: "post",
//       data: {
//         title: data,
//       },
//     }).then((res) => {
//       setBoards(res.data.boards)
//       setLoading(false)
//     })
//   })
//   return (
//     <div>
//       {/* <Head /> */}
//       <div className="board_search">
//         <h1>게시글을 검색하세요.</h1>
//         <input
//           //   onKeyPress={press}
//           type="text"
//           onChange={(e) => setData(e.target.value)}
//         />
//         <br />
//         {/* <button onClick={newBtn}>게시글 만들기</button> */}
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
