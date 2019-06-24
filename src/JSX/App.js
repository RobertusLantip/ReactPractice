import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Product from '../Product';
import Detail from '../Detail';
import Home from '../Home';
import Nav from '../Nav';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Counter from '../Counter';
import DisplayCounter from '../DisplayCounter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/counter' component={DisplayCounter} />
          <Route path='/' exact component={Home}/>
          <Route path='/product' component={Product}/>
          <Route path='/detail' component={Detail}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// function Greeting(props){
//   return <h2> Hello {props.name} </h2>
// }

// class Timer extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       time : props.start
//     }
//   }

//   componentDidMount(){
//     this.addInterval = setInterval(() => this.increase(),1000)
//   }

//   componentWillUnmount(){
//     clearInterval(this.addInterval)
//   }

//   increase(){
//     this.setState((state) => ({
//         time : parseInt(state.time) + 1
//     }))
//   }

//   render(){
//     return(
//       <div><h3> Timer = {this.state.time} detik</h3></div>
//     )
//   }
// }

// class Toggle extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       buttonStatus : true
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(){
//     this.setState(state => ({
//       buttonStatus : !state.buttonStatus
//     }))
//   }

//   render(){
//     return(
//       <div>
//         <button onClick={this.handleClick}>
//           {this.state.buttonStatus ? 'ON' : 'OFF'}
//         </button>
//         <h5>Lampu {this.state.buttonStatus ? 'menyala' : 'mati'}</h5>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//      super(props);
   
//      this.state = {
//         header: "Header from state...",
//         content: "Content from state..."
//      }
//   }
//   render() {
//      return (
//         <div>
//           <Product/>
//         </div>
//      );
//   }
// }

export default App;
