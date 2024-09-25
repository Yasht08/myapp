import React , { Component } from "react";
import Man from "./Man";


class Person extends Component {
  constructor(props){
   super(props);
   this.props=props;
   }
    render(){
        return(
            <div>
           <div>
            <i>
                Dear , {this.props.name}, {this.props.age} years , 
                Welcome 
                </i></div> 
            </div>
        );
    }
}

export default Person;