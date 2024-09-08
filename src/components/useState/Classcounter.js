import React,{ Component } from "react";

class Classcounter extends Component {
    constructor(props){
        super(props);
        this.state = {
          counter:0
        }
    }
    increamentCounter = () =>{
        this.setState(prevState => {
            return {
                counter:prevState.counter+1
            }
        })
    }
    render(){
        return (
            <div>
                 <button onClick={this.increamentCounter}>Count {this.state.counter}</button>
            </div>
        )
    }

}
export default Classcounter