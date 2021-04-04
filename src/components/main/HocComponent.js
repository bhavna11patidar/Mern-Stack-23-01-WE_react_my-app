import React, { Component } from 'react'


const HocComponent=(WrapperComponent, Number)=>{
class HocComponent extends Component {
    constructor(props){
        super();
        this.state={count:0};
    }
    _onButtonClick=()=>{
        this.setState({count:this.state.count+Number})
    }
    render() {
        const {count}=this.state;
        return (
            <div>
                <WrapperComponent onButtonClick={this._onButtonClick} count={count} />
            </div>
        )
    }
    }
    return HocComponent;

}


export default  HocComponent;