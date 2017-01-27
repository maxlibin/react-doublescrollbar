var React = require('react');
var ReactDOM = require('react-dom');
var DoubleScrollBar = require('../../src/react-doublescrollbar');

var App = React.createClass({
	render () {
		return (
			<div>
				<DoubleScrollBar>
					<p></p>
				</DoubleScrollBar>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
