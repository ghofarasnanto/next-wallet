import axios from "axios";
const API_NEXT  = `https://fazzpay.herokuapp.com`
  
  export const checkPinAxios = (pin, token) => {
    const URL = `${API_NEXT}/user/pin?pin=${pin}`
    return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
  }
  
  export const updatePinAxios = (id, body, token) => {
    const URL = `${API_NEXT}/user/pin/${id}`
    return axios.patch(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
  }

  export const getTransferDataAxios = (body, token) => {
    const URL = `${API_NEXT}/transaction/transfer`
    return axios.post(URL, body, { headers: { 'Authorization': `Bearer ${token}` } })
  }