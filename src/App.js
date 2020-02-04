import React from 'react';
import { Component } from 'react';
import {
  ChatkitProvider,
  TokenProvider,
  withChatkit,
} from "@pusher/chatkit-client-react"
import './App.css';
// import Title from './Components/Title';
import MessageList from './Components/MessageList';
// import MessageInput from './Components/MessageInput';

const tokenProvider = new TokenProvider({
  url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/800d59fe-fa6a-496b-92da-d13fd0fb3ad6/token",
});
const instanceLocator = "v1:us1:800d59fe-fa6a-496b-92da-d13fd0fb3ad6"
const userId = "Gabachi"
const roomId = "f9ef568c-5b8a-4ba6-a35b-e90503b9c1cc"

class App extends Component {
  state = { messages: []}

render() {
  return ( 
    <div className="app">
          <ChatkitProvider
    instanceLocator={instanceLocator}
    tokenProvider={tokenProvider}
    userId={userId}>
        {/* <Title /> */}
        <MessageList messages={this.state.messages} />
        {/* <MessageInput /> */}
    </ChatkitProvider>
    </div>
 );
  }
}
 
export default App;