import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-87cda.firebaseio.com/',
})

export default instance