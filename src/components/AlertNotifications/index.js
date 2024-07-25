// Write your code here
import './index.css'
import {RiErrorWarningFill} from 'react-icons/ri'
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdInfo, MdWarning} from 'react-icons/md'
import Notification from '../Notification'

const AlertNotification = () => (
  <div className="alert-cont">
    <h2 className="main-heading">Alert Notifications</h2>
    <Notification>
      <div className="notification-cont">
        <div>
          <div className="notification-heading-cont">
            <AiFillCheckCircle className="icon" />
            <h1>Success</h1>
          </div>
          <p>You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notification-cont">
        <div>
          <div className="notification-heading-cont">
            <RiErrorWarningFill className="icon2" />
            <h1>Error</h1>
          </div>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notification-cont">
        <div>
          <div className="notification-heading-cont">
            <MdWarning className="icon3" />
            <h1>Warning</h1>
          </div>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notification-cont">
        <div>
          <div className="notification-heading-cont">
            <MdInfo className="icon4" />
            <h1>Info</h1>
          </div>
          <p>Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotification
