import axios from 'axios'

export default function({
  route
}) {
  return axios.get('http://114.115.177.23:9000/mock/11/base/router')
}
