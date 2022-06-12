import { axiosC } from "../../axios"
import { useState } from "react"
import Head from "../home/Head"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

/**
 * URL : /board/new
 * 게시글 생성
 *  */

export default function New() {
  // 제목, 내용 State 관리
  const [title, setTitle] = useState()
  const [detail, setDetail] = useState()

  // Btn Click -> axiosC 이용한 게시글 생성 요청
  const postNewBoard = () => {
    axiosC({
      url: "http://3.39.32.181:8001/api/board",
      method: "post",
      data: {
        id: localStorage.getItem("loginId"), // 계정 정보(ID)
        title: title,
        detail: detail,
      },
    }).then((res) => {
      // 게시글 생성 여부 분기 처리
      if (res.data.result) {
        // 성공 분기
        window.alert("게시글 생성 성공")
        window.location.replace("/board") // 성공 시 Board List 페이지 이동
      } else {
        // 실패 분기
        window.alert("게시글 실패, 다시 하세요.")
      }
    })
  }

  return (
    <div>
      <Head />
      <div>
        <h1>New Content</h1>
        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        {/* Text Editor 사용 */}
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello world</p>"
          onChange={(event, editor) => {
            //editor.getData() 사용 시, 텍스트 에디터 안 데이터 추출 가능
            //정규식 이용하여 태그 제거 후 detail에 저장
            const data = editor.getData().replace(/<(\/p|p)([^>]*)>/gi, "")
            setDetail(data)
          }}
        />
        <button onClick={postNewBoard}>CREATE</button>
      </div>
    </div>
  )
}
