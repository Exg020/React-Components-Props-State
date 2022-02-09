import React, { Component } from "react";
import "./App.css";
import Button from "./Components/Button";
import Toggle from "./Components/Toggle";
import Student from "./Components/Student";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //our students array
      students: [
        {
          name: "Bob Ross",
          img: "https://media.giphy.com/media/rYEAkYihZsyWs/giphy.gif",
        },
        {
          name: "Mr.Rogers",
          img: "https://media.giphy.com/media/x0npYExxCGOZeo/giphy.gif",
        },
        {
          name: "Carrie Fisher",
          img: "https://media.giphy.com/media/CXU8axmXoPHUY/giphy.gif",
        },
      ],
      pickFromAll: true,
      pickedStudent: null,
    };
  }
  //handle picking a random student
  pickRandomStudent = () => {
    this.setState(() => ({
      pickedStudent:
        this.state.students[
          Math.floor(Math.random() * this.state.students.length)
        ],
    }));
  };

  render() {
    return (
      <div className="App">
        <Student student={this.state.pickedStudent} />
        <Button handleClicked={this.pickRandomStudent} />
        <Toggle />
      </div>
    );
  }
}

export default App;
