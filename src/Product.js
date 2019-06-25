import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<div>Hello Products</div>, document.getElementById('product'));

// class Product extends React.Component {
//     constructor(props) {
//        super(props);
     
//        this.state = {
//           header: "Header from products state...",
//           content: "Content from products state..."
//        }
//     }

//     useEffect(() => {
//       fetchItems();
//     },[])

//     const fetchItems = async () => {
//        const data = await fetch(
//           'https://fortnite-api.theapinetwork.com/items/list'
//        );
//        console.log(data);
//     }

//     render() {
//        return (
//           <div>
//              <h1>{this.state.header}</h1>
//              <h2>{this.state.content}</h2>
//           </div>
//        );
//     }
//   }

  function Product() {
   // useEffect(() => {
   //    fetchItems();
   //  },[])

   //  const [items,setItems] = useState([]);

   //  const fetchItems = async () => {
   //     const data = await fetch(
   //        'https://fortnite-api.theapinetwork.com/upcoming/get'
   //     );
   //     const items = await data.json();
   //     console.log(items);
   //     setItems(items)
   //  }

   return (
     <div>
        {/* {items.map(item => (
           <h2>{item.name}</h2>
        ))} */}
        <h1>Product page</h1>
     </div>
   )
 }
  
  export default Product;