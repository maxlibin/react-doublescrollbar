(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.reactDoublescrollbar = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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
				{ onScroll: this.handleScroll, ref: "doubleScrollBarWrapper" },
				React.createElement(
					"div",
					{ ref: "doubleScrollBarContainer" },
					this.props.children
				)
			)
		);
	}
});

exports["default"] = DoubleScrollBar;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});