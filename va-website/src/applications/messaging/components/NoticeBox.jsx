import React from 'react';

class NoticeBox extends React.Component {
  render() {
    return (
      <div className="messaging-notice-box">
        <h5>Things you should know:</h5>
        <p>
          <i className="fa fa-calendar-o"></i>
          <span>
            Your messages and threads will be deleted in 365 days
            from the original message.
          </span>
        </p>
        <p>
          <i className="fa fa-user-md"></i>
          <span>
            The VA staff member who responds will vary depending
            on what you ask and may be anyone on your health care team.
          </span>
        </p>
      </div>
    );
  }
}

export default NoticeBox;
