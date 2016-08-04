var React = require('react')
var ReactDOM = require('react-dom')

var Main = React.createClass({
	getInitialState: function(){
		isPause: true
	},

	render: function(){
		return(<div>Hello World</div>)
	}
})

ReactDOM.render(<Main />, document.getElementByID('react-container'))