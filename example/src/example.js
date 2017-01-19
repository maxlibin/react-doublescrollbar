var React = require('react');
var ReactDOM = require('react-dom');
var DoubleScrollBar = require('doubleScrollBar');

var App = React.createClass({
	render () {
		return (
			<div>
				<DoubleScrollBar />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
