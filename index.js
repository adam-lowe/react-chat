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