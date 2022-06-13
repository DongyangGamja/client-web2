import { Link } from "react-router-dom"
import List from "./List"
import Main from "../main/Main"
import Banner2 from "../main/Banner/Banner2"
export default function Board() {
  return (
    <div>
      <Main/>
      <Banner2/>
      <br />
      <List />
    </div>
  )
}
