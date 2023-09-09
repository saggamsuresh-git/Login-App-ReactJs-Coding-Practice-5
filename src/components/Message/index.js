// Write your code here

import './index.css'

const Message = params => {
  const {content} = params
  return <h1>{content}</h1>
}

export default Message
