import React , { Component } from "react";
import Man from "./Man";


class Person extends Component {
  constructor(props){
   super(props);
   }
    render(){
        return(
            <div>
           <div>
            <i>
                Hello {this.props.name}
                </i></div> 
            </div>
        );
    }
}

export default Person;