import axios from "axios";
const API_NEXT  = `https://fazzpay.herokuapp.com`

export const getDataDashboard = (token, id) => {
    const URL = `${API_NEXT}/dashboard/${id}`
    return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
  }

export const getAllhistories = (filter = "", page = "1", token) => {
    const URL = `${API_NEXT}/transaction/history?filter=${filter}&page=${page}&limit=6`
    return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
  }
  
  export const getHistoriesLimit = (token) => {
    const URL = `${API_NEXT}/transaction/history?&page=1&limit=4`
    return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
  }

  export const getHistoriesNotif = (token) => {
    const URL = `${API_NEXT}/transaction/history?&page=1&limit=5`
    return axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
  }