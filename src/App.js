import React from 'react';
import { Component } from 'react';
import './App.css';
// import Title from './Components/Title';
import MessageList from './Components/MessageList';
// import MessageInput from './Components/MessageInput';


class App extends Component {
  state = { messages: []}

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