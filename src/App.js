import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(`https://www.hatchways.io/api/assessment/students`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          students: json,
        });
      });
  }
  render() {
    var { isLoaded, students } = this.state;
    console.log(students.students);
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <div className="container">
            <div className="row font-link">
              <div className="col-6 studentMap">
                {students.students.map((student) => (
                  <li key={student.id}>
                    <img src={student.pic} alt="avatar" />
                    <p>
                      {student.firstName.toUpperCase()}{" "}
                      {student.lastName.toUpperCase()}
                    </p>
                    <p>Email: {student.email}</p>
                    <p>Company: {student.company}</p>
                    <p>Skill: {student.skill}</p>
                    <p>Grades: {student.grades}</p>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
