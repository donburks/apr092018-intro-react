import React, {Component} from 'react';

function Logo() {
  return (<h1>Logo</h1>);
}

function LoginState(auth) {
  return (<li key="99">Log{(auth) ? "out" : "in"}</li>);
}

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    if ((Math.random() * 100) > 50) {
      this.setState({loggedIn: true});
    }
    return (
      <nav>
        <Logo />
        <ul>
          {this.props.menu.map((item, idx) => <li onClick={this.props.handleClick} key={idx}>{item}</li>)}
          {<LoginState auth={this.state.loggedIn} />}
        </ul>
      </nav>
    );
  }
}

export default HeaderBar;
