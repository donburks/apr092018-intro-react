import React, {Component} from 'react';
import Anchor from './Anchor.jsx';
import HeaderBar from './HeaderBar.jsx';
import Button from './Button.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: ["Home", "About", "Contact Us", "FAQ"]
    };
  }

  handleClick() {
    console.log("Did stuff");
  }

  render() {
    return (
      <div>
        <HeaderBar menu={this.state.menu} handleClick={this.handleClick} />
        <h1>Hello Vancouver :)</h1>
        <Anchor url="https://google.ca" text="Search" />
        <Anchor url="https://lighthouselabs.ca" text="Lighthouse Web Site" />
        <Button />
      </div>
    );
  }
}
export default App;
