import React, { Component } from 'react';
import CompChild from './CompChild'

class Life extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 0 }
    }
    HandleButton = () => {
        this.setState({
            num: this.state.num+1
        })
    }
    render() {
        let style  = {
            backgroundColor:'yellow'
        }
        return (
            <div style ={style}>
                {/* 这是父组件页面 */}
                <p>这是父组件页面,初始化参数</p>
                <button onClick={this.HandleButton}>点击一下</button>
                <span>{this.state.num}</span>
                <CompChild gasuName ={this.state.num}/>
            </div>
        )

    }
}

export default Life 
