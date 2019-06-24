import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Link} from 'react-router-dom';

// ReactDOM.render(<div>Hello Products</div>, document.getElementById('product'));

class Product extends React.Component {
    constructor(props) {
       super(props);
     
       this.state = {
          header: "Header from Home state...",
          content: "Content from Home state..."
       }
    }
    render() {
       return (
          <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
          </div>
       );
    }
  }
  
  export default Product;