import React from 'react';
import { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import MessageList from './Components/MessageList';
import MessageInput from './Components/MessageInput';

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "Who'll win?"
  },
  {
    senderId: "eggtoast",
    text: "Maybe this?"
  },
  {
    senderId: "janedoe",
    text: "Definitely someone else!"
  }
]
class App extends Component {
  state = { messages: DUMMY_DATA}

render() {
  return ( 
    <div className="app">
        <Title />
        <MessageList messages={this.state.messages} />
        <MessageInput />
    </div>
 );
  }
}
 
export default App;