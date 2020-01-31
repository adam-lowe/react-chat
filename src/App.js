import React from 'react';
import { useState } from 'react';
import './App.css';
import Title from './Components/Title';
import MessageHistory from './Components/MessageHistory';
import MessageInput from './Components/MessageInput';

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
]

function App() {
  const [messageState, setMessageState] = useState({
    messages: DUMMY_DATA
  });

  return ( 
    <div className="app">
        <Title />
        <MessageHistory messages={messageState.messages} />
        <MessageInput />
    </div>
 );
}

export default App;
