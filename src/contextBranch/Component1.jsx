import React, { Component} from 'react';

export default class Component1 extends Component{
  constructor(){
    super();
    this.state = {
      name : "Saranam Ayyappa",
    }
  }

  render(){
    return(
      <div>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}