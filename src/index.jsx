import React from 'react';
import {render} from 'react-dom';

import MyEditor from './MyEditor.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <MyEditor />
        <p> Hello React!</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app').createShadowRoot());
