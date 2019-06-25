import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    console.log("reducer running",action);
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({},state,{count : state.count + action.value})
            break;
        case 'DECREMENT':
            return Object.assign({},state,{count : state.count - action.value})
            break;
        default:
            return state;
            break;
    }
}

const store = createStore(reducer,applyMiddleware(thunk));
// const store = createStore(reducer);

export default store;