// Axios 설정
import axios from "axios"

export const axiosC = axios.create({
  headers: {
    accessToken: localStorage.getItem("accessToken"),
  },
})
