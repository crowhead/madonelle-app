'use strict';

var Greeting = React.createClass({
  displayName: 'Greeting',

  render: function render() {
    return React.createElement(
      'p',
      null,
      'Hello, Universe'
    );
  }
});

ReactDOM.render(React.createElement(Greeting, null), document.getElementById('greeting-div'));
