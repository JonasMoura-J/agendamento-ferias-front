import axios from 'axios'

const api = axios.create({
    baseURL: "https://agendamento-ferias.herokuapp.com"
})
export default api;