// Write your code here

import './index.css'

const Login = params => {
  const {changeStatus} = params
  return (
    <button className="Login-button" type="button" onClick={changeStatus}>
      Login
    </button>
  )
}

export default Login
