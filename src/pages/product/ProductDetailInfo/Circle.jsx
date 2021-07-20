import React, { Component } from 'react';
import './Circle.scss';

class Circle extends Component {
  render() {
    const { type, moods } = this.props;

    return moods.map(mood => (
      <div key={mood.id} className={`circle ${type || ''}`}>
        {mood.mood}
      </div>
    ));
  }
}

export default Circle;
