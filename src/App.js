import React from 'react';
import { useState } from 'react';
import './App.css';
// import Title from './Components/Title';
import MessageHistory from './Components/MessageHistory';
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

function App() {
  const [messageState, setMessageState] = useState({
    messages: DUMMY_DATA
  });

  return ( 
    <div className="app">
        {/* <Title /> */}
        <MessageHistory messages={messageState.messages} />
        {/* <MessageInput /> */}
    </div>
 );
}

export default App;
