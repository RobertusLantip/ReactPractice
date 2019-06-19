import React from 'react';
import logo from '../logo.svg';
import '../App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Greeting(props){
  return <h2> Hello {props.name} </h2>
}

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      time : props.start
    }
  }

  componentDidMount(){
    this.addInterval = setInterval(() => this.increase(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase(){
    this.setState((state) => ({
        time : parseInt(state.time) + 1
    }))
  }

  render(){
    return(
      <div><h3> Timer = {this.state.time} detik</h3></div>
    )
  }
}

class Toggle extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      buttonStatus : true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(state => ({
      buttonStatus : !state.buttonStatus
    }))
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>
          {this.state.buttonStatus ? 'ON' : 'OFF'}
        </button>
        <h5>Lampu {this.state.buttonStatus ? 'menyala' : 'mati'}</h5>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
     super(props);
   
     this.state = {
        header: "Header from state...",
        content: "Content from state..."
     }
  }
  render() {
     return (
        <div>
           <h1>{this.state.header}</h1>
           <h2>{this.state.content}</h2>
           <Greeting name = "world"/>
           <Timer start="0"/>
           <Toggle/>
        </div>
     );
  }
}

export default App;
