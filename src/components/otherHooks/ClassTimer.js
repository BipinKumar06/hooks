import React, { Component } from 'react'

export default class ClassTimer extends Component {
    interval = null
    constructor(props){
        super(props)
        this.state = {
            timer:0,
            toggleInterval:"stopInterval"
        }
    }
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState(prevState=>({timer:prevState.timer+1}))
        },1000)
    }
    componentWillUnmount() {
            clearInterval(this.interval);
    }
    toggleInterval = () =>{
    if(this.state.toggleInterval === "stopInterval"){
        clearInterval(this.interval)
        this.setState({toggleInterval:"startInterval"})
    }
    else{
        this.interval = setInterval(()=>{
            this.setState(prevState=>({timer:prevState.timer+1}))
        },1000)
        this.setState({toggleInterval:"stopInterval"})
    }
    }
    render() {
    return (
      <div>
        Class Timer - {this.state.timer}
        <button onClick={this.toggleInterval}>{this.state.toggleInterval}</button>
      </div>
    )
  }
}
