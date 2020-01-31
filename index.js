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

  class MessageHistory extends Component {
    render() {
      return (
        <ul className="message-list">                 
          {this.props.messages.map(message => {
            return (
             <li key={message.id}>
               <div>
                 {message.senderId}
               </div>
               <div>
                 {message.text}
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
  }
class App extends Component {
    constructor() {
        super()
        this.state = {
            messages: DUMMY_DATA
        }
    }
    render() { 
        return ( 
            <div className="app">
                <Title />
                <MessageHistory messages={this.state.messages} />
                <MessageInput />
            </div>
         );
    }
}
 
export default App;