import React, { Component } from 'react';
import './MouseOverNav.scss';

class HoverBtn extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div>
        <div
          className="hover-btn"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {this.state.isHovering && (
            <div className="hover-inner">프로젝트명</div>
          )}
        </div>
      </div>
    );
  }
}

export default HoverBtn;
