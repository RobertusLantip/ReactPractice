import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<div>Hello Products</div>, document.getElementById('product'));

class Product extends React.Component {
    constructor(props) {
       super(props);
     
       this.state = {
          header: "Header from detail state...",
          content: "Content from detail state..."
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