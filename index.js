class App extends Component {
    render() { 
        return ( 
            <div className="app">
                <Title />
                <MessageHistory />
                <MessageInput />
            </div>
         );
    }
}
 
export default App;