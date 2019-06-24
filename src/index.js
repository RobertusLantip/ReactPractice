import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './JSX/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux"
import { state } from 'fs';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Products from './Product'

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<AppRouter />, document.getElementById('nav'));

function Index(){
    return(
        <div>
            <Products/>
        </div>
    )
}

// const reducer = (state,action) => {
//     switch(action.type){
//         case "ADD":
//             state = state + action.payload
//             break;
//         case "SUBTRACT":
//             state = state - action.payload
//             break;
//     }
//     return state
// }

// const store = createStore(reducer,1)

// store.subscribe(() => {console.log("state updated",store.getState())})

// store.dispatch({
//     type : "ADD",
//     payload : 10
// })
// store.dispatch({
//     type : "SUBTRACT",
//     payload : 10
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();