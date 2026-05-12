import React, { Component } from "react";

class NutritionWidget extends Component {
  render() {
    const { nutrition } = this.props;
    const total = nutrition.protein + nutrition.carbs + nutrition.fat;

    return (
      <div className="widget">
        <h2>Nutrition (grams)</h2>
        <table border="1" cellPadding="8" width="100%">
          <thead>
            <tr>
              <th>Macro</th>
              <th>Grams</th>
              <th>% of Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Protein</td>
              <td>{nutrition.protein}g</td>
              <td>{Math.round((nutrition.protein / total) * 100)}%</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>{nutrition.carbs}g</td>
              <td>{Math.round((nutrition.carbs / total) * 100)}%</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{nutrition.fat}g</td>
              <td>{Math.round((nutrition.fat / total) * 100)}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NutritionWidget;
