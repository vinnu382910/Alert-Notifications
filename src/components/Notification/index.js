// Write your code here
import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-button">
      {children}
      <GrFormClose className="icon" />
    </div>
  )
}

export default Notification
