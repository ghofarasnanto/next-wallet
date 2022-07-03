import axios from "axios";
const API_NEXT  = `https://fazzpay.herokuapp.com`

export const postTopUpAxios = (body, token) => {
  const URL = `${API_NEXT}/transaction/top-up`
  return axios.post(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}