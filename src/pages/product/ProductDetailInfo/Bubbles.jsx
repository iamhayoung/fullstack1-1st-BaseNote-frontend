import React, { Component } from 'react';
import Circle from './Circle';
import './Bubbles.scss';

class Bubbles extends Component {
  render() {
    const { series, first_moods, second_moods, third_moods, fourth_moods } =
      this.props;

    return (
      <div className={`bubbles ${series || ''}`}>
        {first_moods && <Circle type="xlarge" moods={first_moods} />}
        {second_moods && <Circle type="large" moods={second_moods} />}
        {third_moods && <Circle type="medium" moods={third_moods} />}
        {fourth_moods && <Circle type="small" moods={fourth_moods} />}
      </div>
    );
  }
}

export default Bubbles;
