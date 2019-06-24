import React from 'react';
import Counter from './Counter';
import store from './store'

class DisplayCounter extends React.Component{
    render(){
        return(
            <div>
                <Counter store = {store}/>
            </div>
        );
    }
}

export default DisplayCounter;