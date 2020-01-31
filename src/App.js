import React from 'react';
import './App.css';

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
