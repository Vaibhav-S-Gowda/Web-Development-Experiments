import React, { Component } from "react";
import StatsWidget from "./StatsWidget";
import WorkoutWidget from "./WorkoutWidget";
import GoalWidget from "./GoalWidget";
import ActivityWidget from "./ActivityWidget";
import NutritionWidget from "./NutritionWidget";
import "./FitnessDashboard.css";

class FitnessDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Rajini",
        age: 22,
      },
      stats: [
        { label: "Steps", value: 9842 },
        { label: "Calories Burned", value: 2140 },
        { label: "Heart Rate (bpm)", value: 72 },
        { label: "Sleep (hrs)", value: 7.5 },
      ],
      workouts: [
        { id: 1, name: "Morning Run", duration: "30 min", done: false },
        { id: 2, name: "Push Ups", duration: "15 min", done: false },
        { id: 3, name: "Yoga", duration: "20 min", done: false },
      ],
      goals: [
        { label: "Steps Goal", current: 9842, target: 10000 },
        { label: "Calorie Goal", current: 2140, target: 2500 },
        { label: "Water Intake (L)", current: 1.5, target: 3 },
      ],
      activity: [
        { day: "Mon", minutes: 30 },
        { day: "Tue", minutes: 45 },
        { day: "Wed", minutes: 20 },
        { day: "Thu", minutes: 60 },
        { day: "Fri", minutes: 40 },
        { day: "Sat", minutes: 50 },
        { day: "Sun", minutes: 25 },
      ],
      nutrition: {
        protein: 120,
        carbs: 200,
        fat: 60,
      },
    };
  }

  markDone = (id) => {
    const updated = this.state.workouts.map((w) =>
      w.id === id ? { ...w, done: true } : w
    );
    this.setState({ workouts: updated });
  };

  render() {
    const { user, stats, workouts, goals, activity, nutrition } = this.state;

    return (
      <div className="dashboard">
        <h1>Fitness Dashboard</h1>
        <p>Welcome, {user.name} (Age: {user.age})</p>
        <hr />

        <h2>Today's Stats</h2>
        <div className="stats-row">
          {stats.map((s, i) => (
            <StatsWidget key={i} stat={s} />
          ))}
        </div>

        <div className="main-section">
          <div className="left-col">
            <WorkoutWidget workouts={workouts} markDone={this.markDone} />
            <ActivityWidget activity={activity} />
          </div>
          <div className="right-col">
            <GoalWidget goals={goals} />
            <NutritionWidget nutrition={nutrition} />
          </div>
        </div>
      </div>
    );
  }
}

export default FitnessDashboard;
