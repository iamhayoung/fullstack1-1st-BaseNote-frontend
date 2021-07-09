import React, { Component } from 'react';
import './Hashtags.scss';

class Hashtags extends Component {
  render() {
    const { first_mood, series, seriesNumber, name } = this.props;

    return (
      <div className="hashtags">
        {first_mood &&
          first_mood.map(mood => (
            <p key={mood} className="tag">{`#${mood}`}</p>
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
