import React, { Component } from 'react';
import './Circle.scss';

class Circle extends Component {
  render() {
    const { grade, mood } = this.props;

    return <div className={`circle ${grade || ''}`}>{mood}</div>;
  }
}

export default Circle;
