import axios from "axios";
const API_NEXT  = `https://fazzpay.herokuapp.com`

export const registerAxios = (body) => {
  const URL = `${API_NEXT}/auth/register`
  return axios.post(URL, body)
}

export const loginAxios = (body) => {
  const URL = `${API_NEXT}/auth/login`
  return axios.post(URL, body)
}

export const createPinAxios = (body, token, id) => {
  const URL = `${API_NEXT}/user/pin/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const getProfileByIdAxios = (id, token) => {
  const URL = `${API_NEXT}/user/profile/${id}`
  axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}
