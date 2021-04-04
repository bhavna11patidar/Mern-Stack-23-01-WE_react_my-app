import React, { Component } from 'react';
import HocComponent from './HocComponent';

class HocCounter1 extends Component {
    render() {

        const {count, onButtonClick}=this.props;
        return (
            <div>
               <h1>Counter {count}</h1>
               <button onClick={onButtonClick}>Counter</button>
            </div>
        )
    }
}

export default HocComponent(HocCounter1, 1);
