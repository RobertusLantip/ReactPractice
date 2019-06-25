import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './Actions/Action'

function Counter(props){
    return(
        <div>
            <h1>Counter</h1>
            <p>Count = {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button>
            <button onClick={props.onDecrementClick}>Decrement</button>
        </div>
    )
}

function mapStateToProps(state){
    console.log("mapStateToProps",state)
    return{
        count: state.count
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementClick: () => {
            console.log("clicking increment")
            dispatch(actionCreator.increment(1))
        },
        onDecrementClick: () => {
            console.log("clicking decrement")
            dispatch(actionCreator.decrement(1))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);