import React, { Component } from 'react';
import Hashtags from './Hashtags';
import Circle from './Circle';
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
        <div className={`bubbles ${series || ''}`}>
          {keywords.map(keyword => (
            <Circle
              key={keyword.id}
              mood={keyword.name}
              grade={keyword.grade}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Keyword;
