import React, { Component } from "react";

class GoalWidget extends Component {
  render() {
    const { goals } = this.props;

    return (
      <div className="widget">
        <h2>Weekly Goals</h2>
        {goals.map((g, i) => {
          const percent = Math.round((g.current / g.target) * 100);
          return (
            <div key={i} className="goal-item">
              <p>
                {g.label}: {g.current} / {g.target} ({percent}%)
              </p>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: percent + "%" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GoalWidget;
