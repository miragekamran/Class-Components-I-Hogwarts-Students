import React from "react";
import "../App.css";
import Student from "./Student";
import listOfStudents from "./Data";

export default class HogwartsStudents extends React.Component {
  constructor() {
    super();
    this.state = {
      stateStudents: listOfStudents,
      color: "salmon",
      name: "",
      identity: "",
      img: "",
      age: "",
      bestFriend: "",
    };
  }

  changeHeaderColor = () => {
    this.setState({ color: "blue" });
  };

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h1
          style={{ color: this.state.color }}
          onClick={this.changeHeaderColor}
        >
          Hogwarts Students:
        </h1>
        <form>
          <input
            name="name"
            value={this.state.name}
            onChange={this.inputChangeHandler}
            placeholder="Name"
          />
          <input
            identity="identity"
            value={this.state.identity}
            onChange={this.inputChangeHandler}
            placeholder="Identity"
          />
          <input
            img="img"
            value={this.state.img}
            onChange={this.inputChangeHandler}
            placeholder="Image"
          />
          <input
            age="age"
            value={this.state.age}
            onChange={this.inputChangeHandler}
            placeholder="Name"
          />
          <input
            bestFriend="bestFriend"
            value={this.state.bestFriend}
            onChange={this.inputChangeHandler}
            placeholder="Best Friend"
          />
          <button>Add Student</button>
        </form>
        <div className="class-list">
          {this.state.stateStudents.map((stu) => (
            <Student student={stu} />
          ))}
        </div>
      </div>
    );
  }
}
