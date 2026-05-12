import React, { Component } from "react";

class WorkoutWidget extends Component {
  render() {
    const { workouts, markDone } = this.props;
    const completed = workouts.filter((w) => w.done).length;

    return (
      <div className="widget">
        <h2>Workouts ({completed}/{workouts.length} done)</h2>
        <table border="1" cellPadding="8" width="100%">
          <thead>
            <tr>
              <th>Workout</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((w) => (
              <tr key={w.id}>
                <td>{w.name}</td>
                <td>{w.duration}</td>
                <td>{w.done ? "Done" : "Pending"}</td>
                <td>
                  {!w.done && (
                    <button onClick={() => markDone(w.id)}>Mark Done</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WorkoutWidget;
