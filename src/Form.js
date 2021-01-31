import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "MH-02-001",
      driver: "raju",
      car: "swift"
    };
  }
  componentDidMount;
  render() {
    return (
      <div>
        <h3>call texi</h3>
        <div>
          <span>{this.state.car} </span>
          <span>{this.state.driver} </span>
          <span>{this.state.number} </span>
        </div>
      </div>
    );
  }
}

export default Form;
