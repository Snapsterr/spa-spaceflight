import axios from "axios"

const spaceDevApi = axios.create({
  baseURL: import.meta.env.VITE_REACT_SPACE_DEVS_API_URL,
})

export default spaceDevApi