import axios from "axios";
const API_NEXT  = `https://fazzpay.herokuapp.com`

// auth axios
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

//profile axios
export const getProfileByIdAxios = (id, token) => {
  const URL = `${API_NEXT}/user/profile/${id}`
  return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}

//transfer axios
export const getReceiverAxios = (search = "", sort = "", page = "", token) => {
  const URL = `${API_NEXT}/user?search=${search}&sort=${sort}&page=${page}`
  return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const updateProfileAxios = (id, body, token) => {
  const URL = `${API_NEXT}/user/image/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const updatePhoneNumberAxios = (id, body, token) => {
  const URL = `${API_NEXT}/user/profile/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}

export const updatePasswordAxios = (id, body, token) => {
  const URL = `${API_NEXT}/user/password/${id}`
  return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
}

