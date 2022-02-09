import React, { Component } from "react";

class Student extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>{this.props.student && this.props.student.name}</div>
        <div></div>
      </div>
    );
  }
}

export default Student;
