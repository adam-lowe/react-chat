import React from 'react';
import './App.css';
import Title from './Components/Title';
import MessageHistory from './Components/MessageHistory';
import MessageInput from './Components/MessageInput';

function App() {
  return ( 
    <div className="app">
        <Title />
        <MessageHistory messages={this.state.messages} />
        <MessageInput />
    </div>
 );
}

export default App;
