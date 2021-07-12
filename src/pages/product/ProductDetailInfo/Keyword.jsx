import React, { Component } from 'react';
import Hashtags from './Hashtags';
import './Keyword.scss';

class Keyword extends Component {
  render() {
    const { series, series_number, name, keywords } = this.props;

    return (
      <div className="keyword">
        <h3 className="title">keyword</h3>
        <p className="sentence">
          향 전문가와 사용자들의 느낌을 키워드로 표현하였습니다.
          <br />
          사용자와 주변 사람들이 어떻게 느낄지 유추할 수 있습니다.
        </p>
        <Hashtags series={series} seriesNumber={series_number} name={name} />
        <div className={`bubbles${series !== undefined ? ` ${series}` : ''}`}>
          {keywords.first_mood.map(mood => (
            <div key={mood} className="circle xlarge">
              {mood}
            </div>
          ))}
          {keywords.second_mood.map(mood => (
            <div key={mood} className="circle large">
              {mood}
            </div>
          ))}
          {keywords.third_mood.map(mood => (
            <div key={mood} className="circle medium">
              {mood}
            </div>
          ))}
          {keywords.fourth_mood.map(mood => (
            <div key={mood} className="circle small">
              {mood}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Keyword;