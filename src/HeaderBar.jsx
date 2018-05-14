import React, {Component} from 'react';

class HeaderBar extends Component {
  render() {
    return (
      <nav>
        <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    );
  }
}

export default HeaderBar;
