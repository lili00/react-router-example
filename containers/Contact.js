import React, { Component } from 'react'

export default class Contact extends Component {
	componentDidMount(){
		this.context.router.setRouteLeaveHook(this.props.route, this.leaveHook)
	}
	leaveHook( nextLocation ){
		return 'Do you want leave?'
	}	
	render(){
	  	console.log(this.context)
	    return <h1> Contact me </h1>
	}
}

Contact.contextTypes = {
    router: React.PropTypes.object
}