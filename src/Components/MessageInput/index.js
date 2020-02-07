import React from 'react';
import { Component } from 'react';

class MessageInput extends Component {
    state = {
        message: ''
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }
  render() {
    return ( 
      <div className="MessageInput">
      </div>
   );
    }
  }

  export default MessageInput;
