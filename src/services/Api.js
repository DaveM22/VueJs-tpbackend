    //archivo que hace de conexion entre el backend y frontend

import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'http://localhost:3000'
  })
}
