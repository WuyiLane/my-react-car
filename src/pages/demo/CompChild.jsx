import React, { Component } from 'react';



class CompChild extends Component {
    constructor(props){
        super(props)
        this.state  = {

        }
    }
    /**生命周期 */
    /**
     * 页面加载初始化
     */
    componentWillMount(){
        console.log('Will Mount')
    }
     /**
     * 页面加载初始化
     */
    componentDidMount(){
        console.log("Did Mount")
    }
    componentWillReceiveProps(newsProps){
        console.log('Will ReceiveProps props'+newsProps.name)
    }
    /***
     * 一旦改变值,执行 shouldComponentUpdate,componentWillUpdate,componentDidUpdate
     */
    shouldComponentUpdate(){
        console.log("set State -- should Update")
        return true
    }
    componentWillUpdate(){
        console.log("Will Update")
    }
    componentDidUpdate(){
        console.log('Did Update')
    }
    render() {
        let style = {
            backgroundColor:'pink'
        }
        return (
            <div style ={style}>
                <p>这里是子组件,测试子组件的生命周期</p>
                <span>{this.props.gasuName}</span>
            </div>
        );
    }
}

export default CompChild