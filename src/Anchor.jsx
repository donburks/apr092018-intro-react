import React, {Component} from 'react';

class Anchor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>
        <img src="https://placehold.it/50/50" /><br />
        <a href={this.props.url}>{this.props.text}</a>
      </p>
    );
  }
}

export default Anchor;
