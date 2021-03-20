import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    render() {
        return (
            <div className="bg-info">
                <h1>Inside Parent Component</h1>
                <Child></Child>
            </div>
        )
    }
}
