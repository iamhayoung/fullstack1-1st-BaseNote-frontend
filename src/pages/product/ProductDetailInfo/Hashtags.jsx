import React, { Component } from 'react';
import './Hashtags.scss';

class Hashtags extends Component {
  render() {
    const { keywords, series, seriesNumber, name } = this.props;

    return (
      <div className="hashtags">
        {keywords
          ?.filter(keyword => keyword['grade'] === 'first')
          .map(keyword => (
            <p key={keyword.id} className="tag">{`#${keyword.name}`}</p>
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
