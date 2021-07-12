import React, { Component } from 'react';
import './Hashtags.scss';

class Hashtags extends Component {
  render() {
    const { first_moods, series, seriesNumber, name } = this.props;

    return (
      <div className="hashtags">
        {first_moods?.map(keyword => (
          <p key={keyword.mood} className="tag">{`#${keyword.mood}`}</p>
        ))}
        {series && seriesNumber && (
          <p className="tag">{`#${series}${seriesNumber}`}</p>
        )}
        {name && <p className="tag">{`#${name.replace(/\s+/g, '')}`}</p>}
      </div>
    );
  }
}

export default Hashtags;
