import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  const setCookie = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }
  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      setCookie(data.jwt_token)
    }
  }
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-con">
      <h1 className="login-head">Please login</h1>
      <button onClick={onClickLogin} className="button" type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
