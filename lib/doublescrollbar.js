"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var React = require('react');

var divStyle = {
	background: "#f9f9f9",
	padding: "20px"
};

var testDiv = {
	width: "1000px"
};

var SecondScrollBar = React.createClass({
	displayName: "SecondScrollBar",

	getInitialState: function getInitialState() {
		return {
			secondScroll: 0
		};
	},
	componentDidMount: function componentDidMount() {

		var scrollBarWrapper = this.refs.dbScrollBarWrapper,
		    scrollBar = this.refs.dbScrollBarWrapper;

		scrollBarWrapper.style.overflowX = "auto";
		scrollBarWrapper.style.overflowY = "hidden";

		scrollBarWrapper.addEventListener('scroll', this.handleScroll);
	},

	handleScroll: function handleScroll(e) {
		e.preventDefault();
		this.props.scrolling(e.target.scrollLeft);
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		JSON.stringify(this.props.scroll) !== JSON.stringify(nextProps.scroll); // Check if it's a new user, you can also use some unique, like the ID
		{
			this.refs.dbScrollBarWrapper.scrollLeft = this.props.scroll;
		}
	},

	render: function render() {
		return React.createElement(
			"div",
			{ onScroll: this.handleScroll, ref: "dbScrollBarWrapper", style: { height: '20px', width: this.props.container.outer } },
			React.createElement("div", { ref: "dbScrollBar", style: { height: '20px', width: this.props.container.inner } })
		);
	}
});

var DoubleScrollBar = React.createClass({
	displayName: "DoubleScrollBar",

	getInitialState: function getInitialState() {
		return {
			container: {},
			scroll: 0
		};
	},
	componentDidMount: function componentDidMount() {
		// getting dom...
		var doubleScrollBarWrapper = this.refs.doubleScrollBarWrapper;
		var doubleScrollBarContainer = this.refs.doubleScrollBarContainer;

		this.setState({
			container: {
				outer: doubleScrollBarWrapper.offsetWidth,
				inner: doubleScrollBarContainer.offsetWidth
			}
		});

		doubleScrollBarWrapper.style.overflowX = "auto";
		doubleScrollBarWrapper.style.overflowY = "hidden";

		// handle scroll....
		doubleScrollBarWrapper.addEventListener('scroll', this.handleScroll);
	},
	getSecondScroll: function getSecondScroll(_scroll) {
		this.refs.doubleScrollBarWrapper.scrollLeft = _scroll;
	},
	handleScroll: function handleScroll(e) {
		e.preventDefault();
		this.setState({
			scroll: e.target.scrollLeft
		});
	},

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(SecondScrollBar, { scrolling: this.getSecondScroll, scroll: this.state.scroll, container: this.state.container }),
			React.createElement(
				"div",
				{ onScroll: this.handleScroll, ref: "doubleScrollBarWrapper", style: divStyle },
				React.createElement(
					"div",
					{ ref: "doubleScrollBarContainer", style: testDiv },
					this.props.children
				)
			)
		);
	}
});

exports["default"] = DoubleScrollBar;
module.exports = exports["default"];