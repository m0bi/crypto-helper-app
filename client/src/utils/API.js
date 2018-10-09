import axios from "axios";

export default {
    getCardData: () => axios.get(`/api/master/`),
    getNewsData: () => axios.get(`/api/news/`),
    getLiveData: () => axios.get(`/api/live`)
}