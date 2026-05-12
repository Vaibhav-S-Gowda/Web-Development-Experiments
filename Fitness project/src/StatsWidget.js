import React, { Component } from "react";

class StatsWidget extends Component {
  render() {
    const { stat } = this.props;
    return (
      <div className="stat-card">
        <h3>{stat.label}</h3>
        <p className="stat-value">{stat.value}</p>
      </div>
    );
  }
}

export default StatsWidget;
