var React = require('react');


var SecondScrollBar = React.createClass({

	componentDidMount(){
		// getting dom...
		console.log(this.refs.dbScrollBarWrapper)

		this.refs.dbScrollBarWrapper.style.overflowX = "auto";
		this.refs.dbScrollBarWrapper.style.overflowY = "hidden";
	},

	render(){
		return (
			<div ref="dbScrollBarWrapper"><div ref="dbScrollBar">askjdhaksjh</div></div>
		)
	}
});

var divStyle = {
  background: "#eee",
  padding: "20px",
  margin: "20px"
};

var testDiv = {
	width:"1000px"
}

var DoubleScrollBar = React.createClass({
	
	componentDidMount(){
		// getting dom...
		var doubleScrollBar = this.refs.doubleScrollBar;
	},

	render () {
		return <div ref="doubleScrollBar" style={divStyle}>
			<SecondScrollBar />
			<div style={testDiv}>{this.props.children}</div>
		</div>;
	}
});

export default DoubleScrollBar;
