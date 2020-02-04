import React from 'react';
import { Component } from 'react';
import Chatkit from '@pusher/chatkit-client-react';
import './App.css';
// import Title from './Components/Title';
import MessageList from './Components/MessageList';
// import MessageInput from './Components/MessageInput';

const instanceLocator = "v1:us1:800d59fe-fa6a-496b-92da-d13fd0fb3ad6"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/800d59fe-fa6a-496b-92da-d13fd0fb3ad6/token"
const username = "Gabachi"
const roomId = "f9ef568c-5b8a-4ba6-a35b-e90503b9c1cc"

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "I'll win!"
  }
]

class App extends Component {
  state = { messages: []}

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: username,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
   })
   chatManager.connect().then(currentUser => {
    this.currentUser = currentUser
    currentUser.subscribeToRoom({
    roomId: roomId,
    hooks: {
      onNewMessage: message => {
        this.setState({
          messages: [...this.state.messages, message]
        })
      }
    }
  })
})
}
render() {
  return ( 
    <div className="app">
        {/* <Title /> */}
        <MessageList messages={this.state.messages} />
        {/* <MessageInput /> */}
    </div>
 );
  }
}
 
export default App;