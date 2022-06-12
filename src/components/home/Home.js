import bigImage from "./../public/2.jpg"
import Head from "./Head"

/**
 * URL : /
 * 메인 창
 *  */

export default function Home() {
  return (
    <div>
      <Head />
      <div className="content">
        <div className="big_img">
          <img src={bigImage} />
        </div>
        <div className="detail">
          <div className="first_div">Section 1</div>
        </div>
        <div className="small_box_three">
          <div className="first_div">Section 2</div>
        </div>
        <div className="image_three">
          <div className="first_div">Section 3</div>
        </div>
      </div>
    </div>
  )
}
