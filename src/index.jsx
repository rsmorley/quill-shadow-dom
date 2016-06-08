import React from 'react';
import  ReactDOM from 'react-dom';

import {render} from 'react-dom';

import Quill from 'quill';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var element = ReactDOM.findDOMNode(this.refs.editor);
    var editor = new Quill(element);
  }

  render () {
    return (
      <div>
        <div id="editor">
          <div ref="editor">Hello World!</div>
        </div>
        <p> Hello React!</p>
      </div>
    );
  }
}

// comment the next line and uncomment line 32 to make quill work
render(<App/>, document.getElementById('app').createShadowRoot());
//render(<App/>, document.getElementById('app'));
