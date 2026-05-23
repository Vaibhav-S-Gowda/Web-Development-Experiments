import React, { Component } from "react";

class Attendance extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        students: [
          { name: "Arun", status: "Absent" },
          { name: "Meena", status: "Absent" },
          { name: "Rahul", status: "Absent" }
        ]
      });
    }, 1000);
  }

  markPresent(index) {
    const updated = [...this.state.students];
    updated[index].status = "Present";

    this.setState({ students: updated });
  }

  markAbsent(index) {
    const updated = [...this.state.students];
    updated[index].status = "Absent";

    this.setState({ students: updated });
  }

  render() {
    const presentCount = this.state.students.filter(
      s => s.status === "Present"
    ).length;

    return (
      <div>
        <h2>Total Present: {presentCount}</h2>

        {this.state.students.map((s, index) => (
          <div key={index}>
            <p>
              {s.name} - {s.status}
            </p>

            <button onClick={() => this.markPresent(index)}>
              Present
            </button>

            <button onClick={() => this.markAbsent(index)}>
              Absent
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Attendance;