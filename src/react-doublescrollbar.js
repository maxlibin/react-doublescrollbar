var React = require('react');

var SecondScrollBar = React.createClass({
	getInitialState(){
		return {
			secondScroll:0
		}
	},
	componentDidMount(){

		var scrollBarWrapper = this.refs.dbScrollBarWrapper, scrollBar = this.refs.dbScrollBarWrapper;

		scrollBarWrapper.style.overflowX = "auto";
		scrollBarWrapper.style.overflowY = "hidden";

		scrollBarWrapper.addEventListener('scroll', this.handleScroll)
	},

	handleScroll(e){
		e.preventDefault();
		this.props.scrolling(e.target.scrollLeft)
	},

	componentWillReceiveProps(nextProps) {
		  JSON.stringify(this.props.scroll) !== JSON.stringify(nextProps.scroll) // Check if it's a new user, you can also use some unique, like the ID
	      {
	        this.refs.dbScrollBarWrapper.scrollLeft = this.props.scroll;
	      }
	},

	render(){
		return (
			<div onScroll={this.handleScroll} ref="dbScrollBarWrapper" className="dbScrollBarWrapper" style={{height:'20px', width: this.props.container.outer}}>
				<div ref="dbScrollBar" className="dbScrollBar" style={{height:'20px', width: this.props.container.inner}}></div>
			</div>
		)
	}
});


var DoubleScrollBar = React.createClass({
	getInitialState(){
		return {
			container:{},
			scroll:0
		}
	},
	componentDidMount(){
		// getting dom...
		var doubleScrollBarWrapper = this.refs.doubleScrollBarWrapper;
		var doubleScrollBarContainer = this.refs.doubleScrollBarContainer;

		this.setState({
			container: {
				outer:doubleScrollBarWrapper.offsetWidth,
				inner:doubleScrollBarContainer.offsetWidth
			}
		});

		doubleScrollBarWrapper.style.overflowX = "auto";
		doubleScrollBarWrapper.style.overflowY = "hidden";

		// handle scroll....
		doubleScrollBarWrapper.addEventListener('scroll', this.handleScroll)
	},
	getSecondScroll(_scroll){
		this.refs.doubleScrollBarWrapper.scrollLeft = _scroll;
	},
	handleScroll(e){
		e.preventDefault();
		this.setState({
			scroll:e.target.scrollLeft
		});
	},

	render () {
		return <div>
			<SecondScrollBar scrolling={this.getSecondScroll} scroll={this.state.scroll} container={this.state.container} />
			<div onScroll={this.handleScroll} ref="doubleScrollBarWrapper" className="doubleScrollBarWrapper">
				<div ref="doubleScrollBarContainer" className="doubleScrollBarContainer">
					{this.props.children}
				</div>
			</div>
		</div>;
	}
});

export default DoubleScrollBar;
