// Write your code here

import {Component} from 'react'

import './index.css'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogin: true}

  changeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let buttonElement
    let messageElement

    if (isLogin === true) {
      buttonElement = <Login changeStatus={this.changeStatus} />
      messageElement = <Message content="Please Login" />
    } else {
      buttonElement = <Logout changeStatus={this.changeStatus} />
      messageElement = <Message content="Welcome User" />
    }

    return (
      <div className="bg-container">
        <div className="login-card">
          {messageElement}
          {buttonElement}
          {/* <button onClick={this.changeStatus}>Change Status</button> */}
        </div>
      </div>
    )
  }
}

export default Home
