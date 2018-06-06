import axios from 'axios'

export function getUser (name, pass) {
  const url = 'http://localhost:9090/api/login'
  const data = {
    user: name,
    password: pass
  }

  return axios.get(url, {
    params: data
  }).then((res, err) => {
    console.log(err)
    return Promise.resolve(res.data)
  })
}
