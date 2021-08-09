import React, { Component } from "react";

class CounterClass extends Component {

 constructor(props) {
   super(props);
   this.state = {
     count: 1
   };
 }

  handleIncrement =() => {

   const { count } = this.state;

   this.setState({
     count: count + 1
   });
 }

 render() {
   return (
     <div>
       <p>
        Class Componenet @ Count Value : <span>{this.state.count}</span>
       </p>
       <button onClick={this.handleIncrement}>Increment</button>
     </div>

   );

 }

}

export default CounterClass;