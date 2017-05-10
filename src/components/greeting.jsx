import React from "react";
import './greeting.scss';

export default class extends React.Component {
  render() {
    return (
      <div className="greeting" styleName="testing--css__modifier">
        Hello, {this.props.name}!
      </div>
    );
  }
}
