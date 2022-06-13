import axios from "axios"
import { useState } from "react"

export default function New() {
  const [title, setTitle] = useState()
  const [datail, setDatail] = useState()

  const onClick = () => {
    console.log(title + datail)
    axios({
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
      url: "http://3.39.32.181:8001/api/board/new",
      method: "post",
      data: {
        b_id: "admin",
        b_title: title,
        b_contant: datail,
      },
    }).then((res) => {
      if (res.data.result) {
        window.alert("게시글 생성 성공")
        window.location.replace("/board")
      } else {
        window.alert("게시글 생성 실패, 다시 시도해보세요.")
      }
    })
  }

  return (
    <div>
      <h1>New Content</h1>
      TITLE : <input type="text" onChange={(e) => setTitle(e.target.value)} />
      DETAIL : <input type="text" onChange={(e) => setDatail(e.target.value)} />
      <button onClick={onClick}>CREATE</button>
    </div>
  )
}
