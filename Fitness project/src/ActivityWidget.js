import React, { Component } from "react";

class ActivityWidget extends Component {
  render() {
    const { activity } = this.props;
    const max = Math.max(...activity.map((a) => a.minutes));

    return (
      <div className="widget">
        <h2>Weekly Activity (minutes)</h2>
        <div className="bar-chart">
          {activity.map((a, i) => {
            const height = Math.round((a.minutes / max) * 80);
            return (
              <div key={i} className="bar-col">
                <span className="bar-num">{a.minutes}</span>
                <div className="bar" style={{ height: height + "px" }} />
                <span className="bar-label">{a.day}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ActivityWidget;
