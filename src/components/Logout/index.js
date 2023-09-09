// Write your code here

import './index.css'

const Logout = params => {
  const {changeStatus} = params
  return (
    <button className="Logout-button" type="button" onClick={changeStatus}>
      Logout
    </button>
  )
}

export default Logout
