import React, {Component} from 'react';
import Anchor from './Anchor.jsx';
import HeaderBar from './HeaderBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <h1>Hello Vancouver :)</h1>
        <Anchor url="https://google.ca" text="Search" />
        <Anchor url="https://lighthouselabs.ca" text="Lighthouse Web Site" />
      </div>
    );
  }
}
export default App;
