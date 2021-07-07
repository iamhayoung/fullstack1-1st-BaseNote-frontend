import React, { Component } from 'react';
import './Hashtags.scss';

class Hashtags extends Component {
  render() {
    const { tag } = this.props;
    return (
      <div className="hashtags">
        <p class="tag">{`#${tag}`}</p>
      </div>
    );
  }
}

export default Hashtags;
