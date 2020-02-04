import React from 'react';

function MessageList(props) {
      return (
        <ul className="message-list">
          {props.messages}
       </ul>
      )
    }

  export default MessageList;