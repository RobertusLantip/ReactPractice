import React from 'react';
import {connect} from 'react-redux';

function Counter(props){
    return(
        <div>
            <h1>Counter</h1>
            <p>Count = {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button>
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
            console.log("clicking")
            const action = {type : "INCREMENT",name : "Budi"}
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);