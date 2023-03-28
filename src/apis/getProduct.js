import axios from 'axios'

const BASE_URL = 'http://3.7.252.58:4001/product/getAllProduct'

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
